import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  insuranceSchema,
  type InsuranceFormData,
  type InsuranceFormInput,
} from "../schemas/insurance.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { predictInsurance } from "../services/insuranceService";

const InsuranceForm = () => {
  const [prediction, setPrediction] = useState<number | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InsuranceFormInput, unknown, InsuranceFormData>({
    resolver: zodResolver(insuranceSchema),
    defaultValues: {
      age: 25,
      sex: "male",
      bmi: 25,
      children: 0,
      smoker: "no",
      region: "southeast",
    },
  });
  const {
    mutate: predict,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: predictInsurance,
    onSuccess: (data) => {
      setPrediction(data.predicted_insurance_charge);
    },
    onError: (error) => {
      console.error(error);
      setPrediction(null);
    },
  });
  const onSubmit = (data: InsuranceFormData) => {
    predict(data);
  };
  return (
    <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl sm:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Insurance Predictor
        </h1>

        <p className="mt-2 text-slate-500">
          Enter your details to estimate your insurance charges.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        <div>
          <label
            htmlFor="age"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Age
          </label>

          <input
            id="age"
            type="number"
            {...register("age", { valueAsNumber: true })}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          {errors.age && (
            <p className="mt-1 text-sm text-red-500">{errors.age.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="sex"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Sex
          </label>

          <select
            id="sex"
            {...register("sex")}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {errors.sex && (
            <p className="mt-1 text-sm text-red-500">{errors.sex.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="bmi"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            BMI
          </label>

          <input
            id="bmi"
            type="number"
            step="0.1"
            {...register("bmi", { valueAsNumber: true })}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          {errors.bmi && (
            <p className="mt-1 text-sm text-red-500">{errors.bmi.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="children"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Number of Children
          </label>

          <input
            id="children"
            type="number"
            {...register("children", {
              valueAsNumber: true,
            })}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          {errors.children && (
            <p className="mt-1 text-sm text-red-500">
              {errors.children.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="smoker"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Smoker
          </label>

          <select
            id="smoker"
            {...register("smoker")}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          {errors.smoker && (
            <p className="mt-1 text-sm text-red-500">{errors.smoker.message}</p>
          )}
        </div>{" "}
        <div>
          <label
            htmlFor="region"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Region
          </label>

          <select
            id="region"
            {...register("region")}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option value="southwest">Southwest</option>
            <option value="southeast">Southeast</option>
            <option value="northwest">Northwest</option>
            <option value="northeast">Northeast</option>
          </select>

          {errors.region && (
            <p className="mt-1 text-sm text-red-500">{errors.region.message}</p>
          )}
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Calculating..." : "Predict Insurance Charge"}
          </button>
        </div>
      </form>
      {isError && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {error instanceof Error
            ? error.message
            : "Unable to get prediction. Please make sure the FastAPI server is running."}
        </div>
      )}{" "}
      {prediction !== null && (
        <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-6 text-center">
          <p className="text-sm font-medium text-slate-600">
            Estimated Insurance Charge
          </p>

          <h2 className="mt-2 text-4xl font-bold text-blue-600">
            $
            {prediction.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>
        </div>
      )}
    </div>
  );
};

export default InsuranceForm;
