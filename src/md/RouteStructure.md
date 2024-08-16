# Arhtiyas Management Application - Route and Page Structure

## 1. Routes and Page Structure

### **1.1 Authentication Routes**

- **Login Page**
  - **Path:** `/login`
  - **Component:** `LoginComponent`
  - **Details:**
    - Input field for mobile number.
    - OTP input field for verification.
    - Submit button with loading state.
    - Error messages for invalid OTP or mobile number.
    - Redirect to dashboard upon successful login.

### **1.2 Dashboard Routes**

- **Dashboard Page**
  - **Path:** `/dashboard`
  - **Component:** `DashboardComponent`
  - **Details:**
    - Overview of key metrics (e.g., total outstanding balance, recent invoices).
    - Quick access to customer and invoice management.
    - Summary of recent activities and notifications.

### **1.3 Customer Management Routes**

- **Customer List Page**
  - **Path:** `/customers`
  - **Component:** `CustomerListComponent`
  - **Details:**
    - Table displaying a list of customers.
    - Search and filter functionality.
    - Links to view and edit customer details.

- **Customer Detail Page**
  - **Path:** `/customers/:id`
  - **Component:** `CustomerDetailComponent`
  - **Details:**
    - Display customer profile information.
    - List of related invoices with payment history.
    - Option to edit customer details.
    - Button to create a new invoice for the customer.

### **1.4 Invoice Management Routes**

- **Invoice List Page**
  - **Path:** `/invoices`
  - **Component:** `InvoiceListComponent`
  - **Details:**
    - Table displaying a list of invoices.
    - Search and filter functionality.
    - Status indicators (Paid, Unpaid, Partial).
    - Links to view and edit invoice details.

- **Invoice Detail Page**
  - **Path:** `/invoices/:id`
  - **Component:** `InvoiceDetailComponent`
  - **Details:**
    - Display detailed information about the invoice.
    - List of items with their quantities and prices.
    - Amount paid and remaining balance.
    - Option to update the invoice or add payments.
    - Option to download the invoice as a PDF.

### **1.5 User Management Routes**

- **User List Page**
  - **Path:** `/users`
  - **Component:** `UserListComponent`
  - **Details:**
    - Table displaying a list of users (Arhtiyas and partners).
    - Search and filter functionality.
    - Links to view and edit user details.

- **User Detail Page**
  - **Path:** `/users/:id`
  - **Component:** `UserDetailComponent`
  - **Details:**
    - Display user profile information.
    - Option to edit user details.
    - View user's associated shop information (if applicable).

### **1.6 Shared Components**

- **Button Component**
  - **Path:** N/A (used across various pages)
  - **Component:** `ButtonComponent`
  - **Details:**
    - Customizable button with various styles and states.

- **Form Component**
  - **Path:** N/A (used in forms across pages)
  - **Component:** `FormComponent`
  - **Details:**
    - Reusable form layout with validation and error handling.

- **Modal Component**
  - **Path:** N/A (used for dialogs and confirmations)
  - **Component:** `ModalComponent`
  - **Details:**
    - Customizable modal for confirmations, alerts, and form inputs.

### **1.7 Core Modules**

- **AuthService**
  - **Purpose:** Handle OTP-based authentication and session management.

- **AppwriteService**
  - **Purpose:** Interface with Appwrite backend services.

- **FileService**
  - **Purpose:** Manage file uploads and downloads, including invoice PDFs.

- **StateService**
  - **Purpose:** Manage application state and handle global data.

## 2. Detailed Page Features

### **2.1 Login Page**
- **Features:**
  - Input field for mobile number.
  - OTP input field for verification.
  - Submit button with loading state.
  - Error messages for invalid OTP or mobile number.
  - Redirect to dashboard upon successful login.

### **2.2 Dashboard Page**
- **Features:**
  - Summary cards for key metrics.
  - Recent activities feed.
  - Links to customer and invoice management.
  - Notifications and alerts.

### **2.3 Customer List Page**
- **Features:**
  - Search bar for finding customers.
  - Filters for customer status or type.
  - Table with sortable columns (e.g., name, contact info).
  - Action buttons for viewing and editing.

### **2.4 Customer Detail Page**
- **Features:**
  - Customer profile information display.
  - List of invoices with statuses and amounts.
  - Edit button for modifying customer details.
  - Create new invoice button.

### **2.5 Invoice List Page**
- **Features:**
  - Search bar for finding invoices.
  - Filters for invoice status (Paid, Unpaid, Partial).
  - Table with sortable columns (e.g., invoice number, date).
  - Action buttons for viewing and editing.

### **2.6 Invoice Detail Page**
- **Features:**
  - Invoice details including items, quantities, and prices.
  - Payment history with amounts paid and outstanding balance.
  - Buttons to update invoice or add payments.
  - Download button for PDF version of the invoice.

### **2.7 User List Page**
- **Features:**
  - Search bar for finding users.
  - Filters for user roles or status.
  - Table with sortable columns (e.g., name, phone number).
  - Action buttons for viewing and editing.

### **2.8 User Detail Page**
- **Features:**
  - User profile information display.
  - Option to edit user details.
  - View associated shop information (if applicable).

This updated structure reflects the login process using mobile numbers and OTP for authentication, ensuring all other routes and components align with the application’s requirements.
