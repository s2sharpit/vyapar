# Arhtiyas Management Application - Database Schema

## 1. Customers Collection
- **Purpose:** Store customer-related information, including profile, contact details, and financial data.

```json
{
  "_id": "unique_customer_id", // Primary Key
  "name": "Customer Name",
  "phone": "123-456-7890",
  "email": "customer@example.com",
  "address": "Customer Address",
  "business_type": "Retail", // Type of business (e.g., Retail, Wholesale)
  "total_outstanding_balance": 5000, // Sum of unpaid or partially paid invoice balances
  "profile_image": "url_to_customer_image.jpg" // URL to the customer's profile image
}
```


## 2. Invoices Collection
- **Purpose:** Store detailed invoice data, including items, payment information, previous balance, and remaining balance.

```json
{
  "_id": "unique_invoice_id", // Primary Key
  "customer_id": "unique_customer_id", // Foreign Key linking to Customers collection
  "created_by_user_id": "unique_user_id", // Foreign Key linking to Users collection
  "invoice_date": "2024-08-01",
  "due_date": "2024-08-15",
  "previous_balance": 2000, // Balance carried over from previous invoices
  "total_amount": 10000, // Amount for current invoice items
  "amount_paid": 6000,
  "remaining_balance": 4000, // Total amount due after accounting for previous balance and amount paid
  "status": "Partial", // "Paid", "Unpaid", or "Partial"
  "items": [
    {
      "item_name": "Product A",
      "quantity": 10,
      "price_per_unit": 500,
      "total_price": 5000
    },
    {
      "item_name": "Product B",
      "quantity": 10,
      "price_per_unit": 500,
      "total_price": 5000
    }
  ],
  "download_link": "invoice_url.pdf" // URL to download the invoice in PDF format
}
```


## 3. Users Collection
- **Purpose:** Store user information, such as contact details and access permissions.

```json
{
    "_id": "unique_user_id", // Primary Key
  "name": "Partner Name",
  "phone": "123-456-7890", // Used for OTP verification
  "role": "partner", // Uniform role across all users
  "registration_date": "2024-08-01", // Date when the user was added to the system
  "profile_image": "url_to_user_image.jpg" // URL to the user's profile image
}

```


## 4. Authentication Flow
- **Purpose:** Handle authentication and session management for users.

```json
{
  "phone": "123-456-7890", // User's phone number
  "otp": "123456", // One-time password sent to the user
  "otp_expiration": "2024-08-10T14:37:00Z", // Time when the OTP expires
  "verified": true, // Whether the user successfully verified the OTP
  "session_token": "unique_session_token", // Session token for user authentication
  "session_expiration": "2024-08-10T16:37:00Z" // Time when the session expires
}
```

### User Added by Admin
- The admin manually adds users to the Users collection.

### OTP Verification
- Users receive an OTP via their registered phone number, which they must enter to gain access.

### Access Permissions
- Once verified, users can access the application and perform operations related to customers and invoices.
