import { dashboardData } from "../Utills/staticData";

export class DashboardService {
  static async getDashboardData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dashboardData);
      }, 1000);
    });
  }
} 