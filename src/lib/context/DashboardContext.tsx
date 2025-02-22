"use client";

import { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { DashboardContextType } from '../Utills/types/dasboardTypes';
import { DashboardService } from '../services/api';

interface DashboardContextState {
  data: DashboardContextType | null;
  isLoading: boolean;
  error: Error | null;
  refreshData: () => Promise<void>;
}

const DashboardContext = createContext<DashboardContextState | null>(null);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<DashboardContextType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      const response: DashboardContextType = await DashboardService.getDashboardData() as DashboardContextType;
      setData(response);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <DashboardContext.Provider 
      value={{ 
        data, 
        isLoading, 
        error, 
        refreshData: fetchDashboardData 
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
} 