import { z } from "zod";

export const insuranceSchema = z.object({
  age: z.coerce.number("Age is Required").int("Age must bethe whole Number "),
  //   sex: z.string().refine((val) => val === "male" || val === "female", {
  //     message: "Please select sex",
  //   }),
  sex: z.enum(["male", "female"], {
    error: "Please select sex",
  }),
  bmi: z.coerce
    .number("BMI is required")
    .min(10, "BMI must be at least 10")
    .max(60, "BMI cannot exceed 60"),
  children: z
    .number("Number of children is required")
    .int("Children must be a whole number")
    .min(0, "Children cannot be negative")
    .max(7, "Children cannot exceed 7"),
  //   smoker: z
  //     .string("Please Provide the Value")
  //     .refine((val) => val === "yes" || val === "no", {
  //       message: "Please Select the Valid Option",
  //     }),
  smoker: z.enum(["yes", "no"], {
    error: "Please select a valid option",
  }),
  region: z.enum(["southwest", "southeast", "northwest", "northeast"], {
    error: "Please select a region",
  }),
});
// export type InsuranceFormData = z.infer<typeof insuranceSchema>;
export type InsuranceFormInput = z.input<typeof insuranceSchema>;

// Type after Zod validates/coerces the values
export type InsuranceFormData = z.output<typeof insuranceSchema>;