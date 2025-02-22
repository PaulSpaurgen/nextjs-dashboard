import { DashboardContextType } from "./types/dasboardTypes";

export const employeeData = [
  {
    name: "John Doe",
    employeeStatusId: "EMP001",
    attendance: "Present",
    lastLocation: "Main Office"
  },
  {
    name: "Jane Smith", 
    employeeStatusId: "EMP002",
    attendance: "Present",
    lastLocation: "Branch Office"
  },
  {
    name: "Mike Johnson",
    employeeStatusId: "EMP003", 
    attendance: "Absent",
    lastLocation: "Field Site"
  },
  {
    name: "Sarah Williams",
    employeeStatusId: "EMP004",
    attendance: "Present", 
    lastLocation: "Main Office"
  },
  {
    name: "James Brown",
    employeeStatusId: "EMP005",
    attendance: "Present",
    lastLocation: "Branch Office"
  }
];

export const offDutyEmployeeData = [
  {
    name: "Robert Wilson",
    employeeStatusId: "EMP006",
    attendance: "Off Duty",
    lastLocation: "Home Office"
  },
  {
    name: "Emily Davis",
    employeeStatusId: "EMP007", 
    attendance: "Off Duty",
    lastLocation: "Remote"
  },
  {
    name: "David Miller",
    employeeStatusId: "EMP008",
    attendance: "Off Duty",
    lastLocation: "Home Office"
  }
];

// Row One Data
export const attendanceOverviewData = {
  punchedIn: 6,
  punchedOut: 3,
  totalEmployees: 9,
};

export const taskCompletionData = {
  completed: 12,
  pending: 5,
  total: 17,
  percentageComplete: 70.5,
};

// Row Three Data
export const expenseOverviewData = {
  pieChart: {
    data: [2500, 1800, 1200, 900],
    labels: ["Food", "Transport", "Office Supplies", "Utilities"],
  },
  expenses: [
    { label: "Food", value: 2500, color: "#456cff" },
    { label: "Transport", value: 1800, color: "#ed76ed" },
    { label: "Office Supplies", value: 1200, color: "#52c41a" },
    { label: "Utilities", value: 900, color: "#faad14" },
  ],
};

export const employeeStatusBoxes = [
  { heading: "Total Employees", value: "45", subValue: "+5 this month" },
  { heading: "Active Projects", value: "12", subValue: "2 pending" },
  { heading: "Total Hours", value: "186", subValue: "This week" },
  { heading: "Performance", value: "92%", subValue: "+2.5% increase" },
];

// Row Four Data
export const workingHoursData = {
  data: [7.5, 8.2, 6.8, 8.0, 7.2],
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  label: "Working Hours",
};

export const realTimeStatusData = {
  cards: [
    { label: "Not Yet Started", value: 3 },
    { label: "Delayed", value: 2 },
    { label: "In Progress", value: 8 },
    { label: "Completed", value: 15 },
  ],
  semiCircle: {
    data: [12, 4],
    labels: ["Active", "Inactive"],
    totalTasks: 16,
  },
};

export const dashboardData: DashboardContextType = {
  employeeData,
  attendanceOverviewData,
  taskCompletionData,
  expenseOverviewData,
  employeeStatusBoxes,
  workingHoursData,
  realTimeStatusData,
  isLoading: false,
};
