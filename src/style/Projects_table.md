Projects_table
- grant_code (primary key)
- status
- title
- organization
- start_date
- end_date
- budget
- project_type
- office

country_table
- id 
- country_code 
- country_name(primary key)


project_country_table
- project_id (foreign key to Projects_table.id)
- country_name (foreign key to country_table.name)
