# Text Mockup
This is a concise first thinking about the mockup to ease the process

## User Flow-Based Table of Contents (for development planning)
+ [Page Login](#login-Page)
	> Email/password & demo accounts
+ [Page Dashboard](#dashboard-page)
	> Overview metrics, charts, recent activities
+ [Page Leads List](#leads-list-page)
	> Filter/search, table, + New Lead button
+ [Modal Create New Lead](#create-new-lead)
	> Trigger: Leads List -> + New Lead
+ [Page Lead Detail](#lead-detail-page)
	> Lead info card, Convert Lead button, Timeline/Events, + Add Activity
+ [Modal Edit Lead](#edit-lead)
	> Trigger: Lead Detail -> Edit
+ [Modal Convert Lead to Deal](#convert-lead-to-deal)
	> Trigger: Lead Detail -> Convert Lead
+ [Modal Add Activity](#add-activity)
	> Trigger: Lead Detail Timeline -> + Add Activity
+ [Page Deals List](#deals-list-page)
	> Filter/search, table, + New Deal button
+ [Page Deal Pipeline](#deal-pipeline-page)
	> Columns: Discovery -> Closed, deal cards with move button
+ [Modal Move Deal Stage](#move-deal-stage)
	> Trigger: Pipeline -> Move/Drag button
+ [Page Deal Detail](#deal-detail-page)
	> Deal info card, Timeline/events, + Add Activity
+ [Modal Edit Deal](#edit-deal)
	> Trigger: Deal Detail -> Edit
+ [Modal Add Activity](#add-activity)
	> Trigger -> Deal Detail Timeline -> + Add Activity
+ [Page Activities](#activites-page)
	> Optional overview, filters, table
+ [Modal Delete Confirmation](#delete-confirmation)
	> Trigger: Delete button on Lead/Deal/Activity <br>
	> Delete button only for owner and admin


## Pages

### Login Page

```mathematica
[Centered Card Container]

[App Logo]
[App Name or Tagline]

[Page Title: Sign In]
[Subtitle: Access your CRM dashboard]

[Login Form]
- Email input
- Password input
- Show / Hide password toggle
- Remember me checkbox
- Forgot password link

[Primary Button: Sign In]

[Divider: — Demo Access —]

[Secondary Actions]
[Button: Login as Admin]
[Button: Login as Sales Agent]
[Button: Login as Viewer]

[Helper Text]
*Demo accounts for portfolio showcase purposes only*

[Footer Links]
- Don't have an account? Sign up
- Privacy Policy | Terms of Service
```
### Dashboard Page
```mathematica
[Navbar]
[Page Title: Dashboard]

[Top Metrics Cards]
- Total Leads
- Total Deals
- Pipeline Value
- Conversion Rate
- Recent Activity Feed

[Charts Section]
- Leads by Status (Pie/Bar)
- Deals by Stage (Bar/Column)
- Upcoming / Overdue Tasks (List or Mini Table)

```
**Behavior:**
```txt
 Dashboard Page
 ├─ (if role === Admin) FilterBar
 ├─ KPIs (based on selected scope)
 └─ Summaries (based on selected scope)
 ```
### Leads List Page
```mathematica
[Navbar: Logo | Dashboard | Leads | Deals | Activities | Users | Profile]
[Page Title: Leads]

[Filter Sidebar]
- Status dropdown
- Priority dropdown
- Search box
- Clear filters button

[Leads Table]
- Columns: Name | Company | Status | Priority | Last Activity | Actions(Edit/View/Delete)
- Pagination controls

[Button: + New Lead]
```

### Lead Detail Page
```mathematica
[Navbar]
[Page Title: Lead Name]

[Lead Info Card]
- Name, Email, Phone, Company, Budget, Priority, Status
- Edit / Delete buttons (based on role)
- Convert Lead to Deal button (if not yet converted)

[Converted Deal Card] (optional, if lead has been converted)
- Title
- Amount
- Stage
- View Deal button

[Timeline / Events]
- Chronological list
- System events: Lead created, Lead converted, Deal stage changes
- Activities: Calls, Tasks, Meetings, Notes
- Button: + Add Activity

```

### Deals List Page
```mathematica
[Navbar]
[Page Title: Deals]

[Filter Sidebar]
- Stage dropdown
- Min/Max value input
- Search box
- Clear filters button

[Deals Table]
- Columns: Title | Lead | Amount | Stage | Probability | Last Update | Actions
- Pagination controls

[Button: + New Deal]
```
### Deal Pipeline Page
```mathematica
[Navbar]
[Page Title: Pipeline]

[Pipeline Columns: Discovery | Proposal | Negotiation | Closed Won | Closed Lost]
- Each column: cards representing deals
- Deal Card: Title | Lead | Amount | Probability | Move to Next Stage button
```

### Deal Detail Page
```mathematica
[Navbar]
[Page Title: Deal Title]

[Deal Info Card]
- Lead Name
- Amount
- Stage
- Probability
- Edit / Delete buttons

[Timeline / Events]
- System events: Deal created, stage moved, deal won/lost
- Activities: Tasks, Notes, Meetings
- Button: + Add Activity
```

### Activites Page
```mathematica
[Navbar]
[Page Title: Activities]

[Filter Sidebar]
- Type dropdown
- Due date filter
- Completed toggle
- Search box

[Activities Table]
- Columns: Type | Lead | Deal | Date | Content | Completed | Actions
- Pagination controls
```

## Modals

### Create New Lead
Triggered from: Leads List -> + New Lead
```mathematica
[Modal: Create New Lead]

- Full Name *
- Company *
- Email
- Phone
- Budget (optional)
- Priority (Low / Medium / High)
- Lead Source (optional)

[Button: Create Lead]
[Button: Cancel]
```

### Edit Lead
Triggered from: Lead Detail -> Edit
```mathematica
[Modal: Edit Lead]

- All lead fields
- Status (New / Contacted / Qualified / Unqualified)

[Button: Save Changes]
[Button: Cancel]
```

### Convert Lead to Deal
Triggered from: Lead Detail -> Convert to Deal
```mathematica
[Modal: Convert Lead to Deal]

- Deal Title (pre-filled)
- Deal Amount (pre-filled from budget)
- Pipeline Stage (default: Discovery)
- Probability (%)
- Deal Owner (auto or select)

[Checkbox: Mark lead as converted]

[Button: Create Deal]
[Button: Cancel]
```
After this:
- Lead becomes read-only
- Deal appear in:
	- Deals List
	- Deal Pipeline

### Move Deal Stage
```mathematica
Triggered from: Pipeline -> Move / Drag / Button
[Modal: Move Deal]

- Current Stage (read-only)
- New Stage (dropdown)
- Probability (auto-adjusted or editable)

[Button: Update Stage]
[Button: Cancel]
```
Auto-log activity: Deal moved to Proposal

### Edit Deal
Triggered from: Deal Detail -> Edit
```mathematica
[Modal: Edit Deal]

- Title
- Amount
- Stage
- Probability
- Expected Close Date

[Button: Save Changes]
[Button: Cancel]
```

### Add Activity
Triggered from: Lead Detail, Deal Detail, Pipeline
```mathematica
[Modal: Add Activity]

- Activity Type (Note / Call / Task)
- Content
- Due Date (if Task)
- Mark as completed (checkbox)

[Button: Save Activity]
[Button: Cancel]
```

### Delete Confirmation
Triggered from: Lead / Deal delete
```mathematica
[Modal: Confirm Deletion]

Are you sure you want to delete this item?
This action cannot be undone.

[Button: Delete]
[Button: Cancel]
```