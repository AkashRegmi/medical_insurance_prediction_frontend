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
    reset,
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
    <div className="insurance-form-panel">
      <div className="form-intro">
        <span className="form-step">YOUR DETAILS</span>
        <h3>Tell us a little about yourself</h3>
        <p>Your information is used to generate this estimate.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="insurance-form-grid">
        <div className="form-field">
          <label htmlFor="age">Age</label>

          <input
            id="age"
            type="number"
            min="18"
            max="100"
            {...register("age", { valueAsNumber: true })}
          />

          {errors.age && <p className="field-error">{errors.age.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="sex">Sex</label>

          <select id="sex" {...register("sex")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          {errors.sex && <p className="field-error">{errors.sex.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="bmi">BMI</label>

          <input
            id="bmi"
            type="number"
            step="0.1"
            min="10"
            max="60"
            {...register("bmi", { valueAsNumber: true })}
          />

          {errors.bmi && <p className="field-error">{errors.bmi.message}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="children">Number of Children</label>

          <input
            id="children"
            type="number"
            min="0"
            max="7"
            {...register("children", {
              valueAsNumber: true,
            })}
          />

          {errors.children && (
            <p className="field-error">{errors.children.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="smoker">Tobacco use</label>

          <select id="smoker" {...register("smoker")}>
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </select>

          {errors.smoker && (
            <p className="field-error">{errors.smoker.message}</p>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="region">Region</label>

          <select id="region" {...register("region")}>
            <option value="southwest">Southwest</option>
            <option value="southeast">Southeast</option>
            <option value="northwest">Northwest</option>
            <option value="northeast">Northeast</option>
          </select>

          {errors.region && (
            <p className="field-error">{errors.region.message}</p>
          )}
        </div>
        <div className="form-submit">
          <button type="submit" disabled={isPending}>
            {isPending ? "Preparing your estimate..." : "Estimate my cost"}
            {!isPending && <span aria-hidden="true">&rarr;</span>}
          </button>
        </div>
      </form>
      {isError && (
        <div className="form-error" role="alert">
          <strong>We couldn’t create an estimate just now.</strong>
          <p>
            {error instanceof Error
              ? error.message
              : "Please try again in a moment."}
          </p>
        </div>
      )}
      {prediction !== null && (
        <section
          className="estimate-result"
          aria-live="polite"
          aria-labelledby="result-title"
        >
          <div className="result-label">
            <span className="result-check" aria-hidden="true">
              &#10003;
            </span>{" "}
            YOUR ESTIMATE IS READY
          </div>
          <h3 id="result-title">Estimated insurance cost</h3>
          <p className="result-amount">
            $
            {prediction.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className="result-explanation">
            This estimate reflects patterns in historical data and the details
            you provided. It is a starting point for learning, not a quote or a
            guaranteed price.
          </p>
          <p className="result-disclaimer">
            Actual costs can vary based on factors this model does not include.
          </p>
          <button
            type="button"
            className="try-again-button"
            onClick={() => {
              setPrediction(null);
              reset();
            }}
          >
            Try another estimate <span aria-hidden="true">&rarr;</span>
          </button>
        </section>
      )}
    </div>
  );
};

export default InsuranceForm;
