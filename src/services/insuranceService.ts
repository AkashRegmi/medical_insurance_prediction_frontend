import axios from "axios";
import type { InsuranceFormData } from "../schemas/insurance.schema";
export interface PredictionResponse {
  predicted_insurance_charge: number;
}
const API_URL = import.meta.env.VITE_API_URL;
export const predictInsurance = async (
  data: InsuranceFormData,
): Promise<PredictionResponse> => {
  const response = await axios.post<PredictionResponse>(
    `${API_URL}/predict`,
    data,
  );

  return response.data;
};
