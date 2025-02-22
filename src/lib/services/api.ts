import { dashboardData } from "../Utills/staticData";

export class DashboardService {
  static async getDashboardData() {
    // TODO: Implement actual API call
    const data = setTimeout(() => {
      return dashboardData;
    }, 2000);

    return data;
  }
} 