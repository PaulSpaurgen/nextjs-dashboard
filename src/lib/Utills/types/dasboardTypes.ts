// Employee Types
interface Employee {
  name: string;
  employeeStatusId: string;
  attendance: string;
  lastLocation: string;
}

// Row One Data Types
interface AttendanceOverviewData {
  punchedIn: number;
  punchedOut: number;
  totalEmployees: number;
}

interface TaskCompletionData {
  completed: number;
  pending: number;
  total: number;
  percentageComplete: number;
}

// Row Three Data Types
interface ExpenseOverviewData {
  pieChart: {
    data: number[];
    labels: string[];
  };
  expenses: {
    label: string;
    value: number;
    color: string;
  }[];
}

interface EmployeeStatusBox {
  heading: string;
  value: string;
  subValue: string;
}

// Row Four Data Types
interface WorkingHoursData {
  data: number[];
  labels: string[];
  label: string;
}

interface RealTimeStatusData {
  cards: {
    label: string;
    value: number;
  }[];
  semiCircle: {
    data: number[];
    labels: string[];
    totalTasks: number;
  };
}

export interface DashboardContextType {
  employeeData: Employee[];
  attendanceOverviewData: AttendanceOverviewData;
  taskCompletionData: TaskCompletionData;
  expenseOverviewData: ExpenseOverviewData;
  employeeStatusBoxes: EmployeeStatusBox[];
  workingHoursData: WorkingHoursData;
  realTimeStatusData: RealTimeStatusData;
  isLoading: boolean;
}

