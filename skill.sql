-- CREATE
-- -- Create a new table called 'TableName' in schema 'SchemaName'
-- -- Drop the table if it already exists
-- IF OBJECT_ID('SchemaName.TableName', 'U') IS NOT NULL
-- DROP TABLE SchemaName.TableName
-- GO  
-- -- Create the table in the specified schema
-- CREATE TABLE SchemaName.TableName
-- (
--     TableNameId INT NOT NULL PRIMARY KEY,
--     -- primary key column
--     Column1 [NVARCHAR](50) NOT NULL,
--     Column2 [NVARCHAR](50) NOT NULL
--     -- specify more columns here
-- );
-- GO

-- Insert rows into table 'TableName'
INSERT INTO TableName
( -- columns to insert data into
 [Column1], [Column2], [Column3]
)
VALUES
( -- first row: values for the columns in the list above
 Column1_Value, Column2_Value, Column3_Value
),
( -- second row: values for the columns in the list above
 Column1_Value, Column2_Value, Column3_Value
)
-- add more rows here
GO