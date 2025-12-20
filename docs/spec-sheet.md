*** Begin Patch
*** Update File: f:\dev\user-management-CRM\spec sheet.md
@@ 
# Table of Contents
+ [Project Overview](#1-project-overview)
+ [User Roles](#2-user-roles)
+ [Core Features](#3-core-features)
+ [Functional Requirements](#4-functional-requirements)
+ [Non-Functional Requirements](#5-non-functional-requirements)
+ [Data Model](#6-data-model)
+ [API Endpoints](#7-api-endpoints)
+ [Technical Stack](#8-technical-stack)
+ [UI Overview](#9-ui-overview)
+ [User Flows](#10-user-flows)

# 1. Project Overview

## What is the app?

A lightweight, modular Customer Relationship Management (CRM) system designed to help small teams track leads, manage deals, and organize sales activities in a clear, structured interface.

## Who is it for?

Freelancers, small businesses, and junior sales teams who need an efficient way to manage potential clients and follow up on opportunities without relying on heavy enterprise tools like HubSpot or Salesforce.

## The problem it solves

Most small teams struggle with scattered client information: leads inside spreadsheets, notes in messaging apps, deals tracked manually, and no centralized tool for follow-ups. This leads to missed opportunities, poor visibility, and inconsistent communication.

## Core value

The CRM brings all client-related information into one place—leads, deals, and activities—so teams can see where every opportunity stands, prioritize work, and make informed decisions. It delivers clarity, reliability, and simplicity without the complexity of traditional CRMs.

---

## 2. User Roles

### Admin

**The Admin has full control over the CRM**

**Permissions:**
- Create, edit, and delete leads, deals, and activities
- Manage user accounts and assign roles
- Access all dashboards and analytics
- Configure system settings (statuses, pipeline stages, etc.)
- View all data across the platform

### Sales Agent

**The Sales Agent focuses on day-to-day client management and sales opportunities**

**Permissions:**
- Create and edit their own leads, deals, and activities
- View and update lead status
- Move deals through pipeline stages
- Add notes, tasks, and follow-up activities
- Access the dashboard and performance metrics

**Restrictions:**
- Cannot delete leads or deals they did not create
- Cannot manage user accounts or system settings

### Viewer

**A read-only role for supervisors or external stakeholders**

**Permissions:**
- View leads, deals, activities, and dashboards
- Access performance metrics

**Restrictions:**
- Cannot create, edit, or delete any data
- Cannot access user or system settings
- Cannot move deals or change statuses

---

## 3. Core Features

### Lead Management

Centralized control over all potential clients. Users can create, edit, and categorize leads, track their status, attach activities, and monitor their progress through the sales funnel. Filtering and sorting allow quick identification of high-priority leads.

### Deal Pipeline

Structured tracking of opportunities associated with each lead. Deals move through predefined pipeline stages (Discovery, Proposal, Negotiation, Closed Won/Lost), giving the team a clear view of what's active, what's progressing, and what needs urgent attention.

### Activities (Notes, Calls, Tasks)

A chronological log of interactions and follow-ups tied to each lead or deal. Sales agents can record notes, schedule calls, create tasks, and mark actions as completed, ensuring nothing falls through the cracks.

### Dashboard and KPIs

A real-time overview of sales performance, including total leads, pipeline value, deal progression, and conversion rates. Visual summaries help the team prioritize efforts and spot bottlenecks in the funnel.

### Search and Filter

Powerful list views with sidebar filters, quick search, and customizable sorting options. Users can rapidly find leads or deals by name, status, priority, budget, or date, enabling fast and efficient workflows.

### Authentication

A basic user login system with role-based permissions (Admin, Sales Agent, Viewer). While optional for the MVP, authentication showcases how the CRM supports secure, multi-user environments.

---

## 4. Functional Requirements

### Leads

- Create new leads with fields: Name, Contact Info, Company, Budget, and Priority
- Edit existing lead information
- Delete a lead (admin only)
- Assign or update lead status (New, Contacted, Negotiating, Won, Lost)
- Link one or more deals to a lead
- Add activities (notes, calls, tasks) directly from the lead detail page
- View all activities associated with a lead in chronological order
- Filter leads by status, priority, company, budget range, or creation date
- Search leads by name, email, phone, company, or tags
- Sort leads by creation date, last activity date, budget, or priority
- Display key lead data in summary cards or table rows

### Deals

- Create a deal associated with a specific lead
- Edit deal details (title, amount, stage, probability)
- Delete deals (admin or deal creator only)
- Move deals between pipeline stages (Discovery → Proposal → Negotiation → Closed Won/Lost)
- View all deals linked to a lead from the lead's profile page
- Filter deals by stage, value, probability, or expected closing date
- Sort deals by value, stage, creation date, or last updated date
- Display deal pipeline totals and progression
- Automatically update lead status when a deal is won or lost

### Activities

- Create an activity linked to a lead or deal
- Choose activity type (note, call, task, meeting)
- Add content/details + date and (for tasks) due date
- Mark tasks as completed or reopen them
- Edit and delete activities (depending on permissions)
- View activities in a chronological timeline
- Filter activities by type, due date, completed status, or user
- Display upcoming tasks and overdue tasks
- Auto-tag activities to their related lead/deal

### Dashboard and KPIs

- Global search across leads and deals
- Per-module search (leads only, deals only)
- Filters for status, pipeline stage, date ranges, priority, budget, value
- Sorting controls for any sortable column (name, value, date, stage, etc.)
- Clear filters button
- Save filter presets
- All tables support pagination and responsive column sizing

### Authentication

- User login via email and password
- Role-based permissions (Admin, Sales Agent, Viewer)
- Redirect unauthorized users away from protected routes
- Store auth session in local storage or cookies
- Admin dashboard to create/manage user accounts and roles
- Logout functionality and session expiration handling
- Password reset via email

### System Events (Automatic History)
- Automatically record important system events related to leads and deals
- Events include:
  - Lead created
  - Lead updated
  - Lead converted to deal
  - Deal created
  - Deal stage changed
  - Deal marked as won or lost
  - Activity completed
- System events are:
  - Created automatically
  - Read-only
  - Timestamped
- System events are displayed alongside activities in timelines
- System events are visually distinguished from user-created activities

---

## 5. Non-Functional Requirements

- Performance expectations (fast UI, cached queries)
- Responsiveness
- Offline tolerance (query caching)
- Error handling (toast notifications)
- Data validation (zod)
- Clean API design (RESTful endpoints)

---

## 6. Data Model

### Leads

- id (int, primary key)
- name (string)
- email (string)
- company (string)
- status (enum: New, Contacted, Negotiating, Won, Lost)
- created_at (timestamp)
- updated_at (timestamp)
- budget (decimal)
- priority (enum: Low, Medium, High)

### Deals

- id (int, primary key)
- lead_id (int, foreign key to Leads)
- title (string)
- amount (decimal)
- stage (enum: Discovery, Proposal, Negotiation, Closed Won, Closed Lost)

### Activities

- id (int, primary key)
- lead_id (int, foreign key to Leads)
- deal_id (int, foreign key to Deals, nullable)
- type (enum: Note, Call, Task, Meeting)
- note (text)
- due_date (date, nullable for non-tasks)

#### Summary Table

| **Leads**                | **Deals**                        | **Activities**                       |
|--------------------------|----------------------------------|--------------------------------------|
| id (int, primary key)    | id (int, primary key)            | id (int, primary key)                |
| name (string)            | lead_id (int, foreign key)       | lead_id (int, foreign key)           |
| email (string)           | title (string)                   | deal_id (int, foreign key, nullable) |
| company (string)         | amount (decimal)                 | type (enum: Note, Call, Task, Meeting)|
| status (enum)            | stage (enum)                     | note (text)                          |
| created_at (timestamp)   |                                  | due_date (date, nullable)            |
| updated_at (timestamp)   |                                  |                                      |
| budget (decimal)         |                                  |                                      |
| priority (enum)          |                                  |                                      |

---

## 7. API Endpoints

### Leads API

- Retrieve a list of all leads with optional filters and sorting  
	`GET /api/leads?status=&priority=&company=&search=&sort=&order=&page=`
- Retrieve a single lead by ID  
	`GET /api/leads/{id}`
- Create a new lead  
	`POST /api/leads`
	```json
	{
		"name": "string",
		"email": "string",
		"company": "string",
		"status": "New | Contacted | Negotiating | Won | Lost",
		"budget": "decimal",
		"priority": "Low | Medium | High"
	}
	```
- Update an existing lead by ID  
	`PATCH /api/leads/{id}`
- Delete a lead by ID (admin only)  
	`DELETE /api/leads/{id}`

### Deals API

- Retrieve a list of all deals with optional filters and sorting  
	`GET /api/deals?stage=&min_value=&max_value=&search=&sort=&order=&page=`
- Retrieve a single deal by ID  
	`GET /api/deals/{id}`
- Create a new deal  
	`POST /api/deals`
	```json
	{
		"lead_id": "int",
		"title": "string",
		"amount": "decimal",
		"stage": "Discovery | Proposal | Negotiation | Closed Won | Closed Lost"
	}
	```
- Update an existing deal by ID  
	`PATCH /api/deals/{id}`
- Move a deal to a different pipeline stage  
	`PATCH /api/deals/{id}/move`
	```json
	{
		"stage": "Discovery | Proposal | Negotiation | Closed Won | Closed Lost"
	}
	```
- Delete a deal by ID (admin or deal creator only)  
	`DELETE /api/deals/{id}`

### Activities API

- Retrieve a list of all activities with optional filters and sorting  
	`GET /api/activities?type=&due_date=&completed=&search=&sort=&order=&page=`
- Retrieve a single activity by ID  
	`GET /api/activities/{id}`
- Create a new activity  
	`POST /api/activities`
	```json
	{
		"lead_id": "int",
		"deal_id": "int (nullable)",
		"type": "Note | Call | Task | Meeting",
		"note": "text",
		"due_date": "date (nullable)"
	}
	```
- Update an existing activity by ID  
	`PATCH /api/activities/{id}`
- Mark a task as completed or reopen it  
	`PATCH /api/activities/{id}/complete`
	```json
	{
		"completed": "boolean"
	}
	```
- Delete an activity by ID (depending on permissions)  
	`DELETE /api/activities/{id}`

### Dashboard API

- Retrieve key performance indicators (KPIs) for the dashboard  
	`GET /api/dashboard/kpis`
	```json
	{
		"total_leads": "int",
		"leads_by_status": {
			"New": "int",
			"Contacted": "int",
			"Negotiating": "int",
			"Won": "int",
			"Lost": "int"
		},
		"total_deals": "int",
		"deals_by_stage": {
			"Discovery": "int",
			"Proposal": "int",
			"Negotiation": "int",
			"Closed Won": "int",
			"Closed Lost": "int"
		},
		"pipeline_value": "decimal",
		"conversion_rate": "decimal"
	}
	```

### Authentication API

- User login  
	`POST /api/auth/login`
	```json
	{
		"email": "string",
		"password": "string"
	}
	```
- Get current user info  
	`GET /api/auth/me`
- User logout  
	`POST /api/auth/logout`

### User API

- Retrieve a list of all users (admin only)  
	`GET /api/users`
- Retrieve a single user by ID (admin only)  
	`GET /api/users/{id}`
- Create a new user (admin only)  
	`POST /api/users`
	```json
	{
		"name": "string",
		"email": "string",
		"password": "string",
		"role": "Admin | Sales Agent | Viewer"
	}
	```
- Update an existing user by ID (admin only)  
	`PATCH /api/users/{id}`
- Delete a user by ID (admin only)  
	`DELETE /api/users/{id}`

---

## 8. Technical Stack

- **Frontend:** React with TypeScript, Tailwind CSS for styling, React Query for data fetching
- **Backend:** Node.js with Express, TypeScript, Prisma ORM for database interactions
- **Database:** PostgreSQL
- **Authentication:** JWT tokens, bcrypt for password hashing
- **Deployment:** Vercel for frontend, Heroku for backend

---

## 9. UI Overview

- Leads List Page
- Lead Detail Page
- Deals List Page
- Deals Pipeline Page
- Deal Detail Page
- Activities Timeline Page
- Dashboard Page

## 10. User Flows

`login → view dashboard → navigate to leads → create new lead → convert lead to deal → move deal through pipeline → log activity → logout`

> **Sales Agent creates and works on a new lead**  
> Example:  
> 
> They open the Leads page, click “Add Lead,” enter the contact information, and save.  
> From the lead profile, they immediately log a “Call” activity to record the first contact attempt.  
> After reaching the prospect, they update the lead status to Contacted, add a follow-up task for next week, and create a new deal with the estimated value.
> 
> This will render as:
> 
> > - Lead: John Doe, Company XYZ, Status: Contacted
> > - Deal: Website Redesign, Amount: $5,000, Stage: Proposal
> > - Activities:
> >   - Call on [date]: Discussed project scope
> >   - Task due [date]: Follow up with proposal
---
> **Progressing a Deal Through the Pipeline**<br>
> Example:
>
> A sales agent opens their Deals view and sees a deal in the “Proposal” stage.
> They update the amount and probability after sending a formal offer to the client.
> During a follow-up call, the client expresses interest, so the agent moves the deal to “Negotiation.”
> Once the agreement is finalized, they mark the deal as “Closed Won,” which automatically updates the linked lead’s status to Won.
>
> This will render as:
> > - Deal: Mobile App Development, Amount: $10,000, Stage: Closed Won
> > - Lead: Jane Smith, Company ABC, Status: Won
---
> **Admin Manages Team Activity and Performance**<br>
> Example:
> 
> An admin logs in and opens the Dashboard.
> They review the total pipeline value, deals by stage, and conversion rates for the current month.
> Noticing an imbalance between new and contacted leads, they open the Leads page and filter by New status to see which agents haven’t followed up yet.
> They then create a new user account for a recently hired agent and assign them the “Sales Agent” role.
>
> This will render as:
> > - Total Leads: 150
> > - Pipeline Value: $75,000
> > - New Leads: 40
> > - User: Mark Johnson, Role: Sales Agent
---