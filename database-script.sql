CREATE TABLE [radar-db].dbo.UnitType
(
	Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	[Name] NVARCHAR(20) UNIQUE NOT NULL
)
CREATE TABLE [radar-db].dbo.[Level]
(
	Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	[Name] NVARCHAR(20) UNIQUE NOT NULL
)
CREATE TABLE [radar-db].dbo.Specialization
(
	Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	[Name] NVARCHAR(20) UNIQUE NOT NULL
)
CREATE TABLE [radar-db].dbo.Project
(
	Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	[Name] NVARCHAR(20) NOT NULL,
	StartDate Date,
	EndDate Date
)
CREATE TABLE [radar-db].dbo.Employee
(
	Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	FirstName NVARCHAR(20) NOT NULL,
	LastName NVARCHAR(20) NOT NULL,
	Age INTEGER,
	Src NVARCHAR(MAX),
	LevelId UNIQUEIDENTIFIER,
	CONSTRAINT FK_Level_To_Employee FOREIGN KEY (LevelId)  REFERENCES [radar-db].dbo.[Level] (Id),
	UnitTypeId UNIQUEIDENTIFIER,
	CONSTRAINT FK_UnitType_To_Employee FOREIGN KEY (UnitTypeId)  REFERENCES [radar-db].dbo.UnitType (Id),
	SpecializationId UNIQUEIDENTIFIER,
	CONSTRAINT FK_Specialization_To_Employee FOREIGN KEY (SpecializationId)  REFERENCES [radar-db].dbo.Specialization (Id),
	UnitManagerId UNIQUEIDENTIFIER,
	CONSTRAINT FK_UnitManager_To_Employee FOREIGN KEY (UnitManagerId)  REFERENCES [radar-db].dbo.Employee (Id),
	ManagerId UNIQUEIDENTIFIER,
	CONSTRAINT FK_Manager_To_Employee FOREIGN KEY (ManagerId)  REFERENCES [radar-db].dbo.Employee (Id)

)
CREATE TABLE [radar-db].dbo.Certification
(
	Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	[Name] NVARCHAR(100) NOT NULL,
	StartDate Date,
	EndDate Date,
	EmployeeId UNIQUEIDENTIFIER NOT NULL,
	CONSTRAINT FK_Employee_To_Certification FOREIGN KEY (EmployeeId)  REFERENCES [radar-db].dbo.Employee (Id)
)
CREATE TABLE [radar-db].dbo.EmployeeInProject
(
	Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
	EmployeeId UNIQUEIDENTIFIER NOT NULL,
	CONSTRAINT FK_EmployeeInProject_To_Employee FOREIGN KEY (EmployeeId)  REFERENCES [radar-db].dbo.Employee (Id),
	ProjectId UNIQUEIDENTIFIER NOT NULL,
	CONSTRAINT FK_EmployeeInProject_To_Project FOREIGN KEY (ProjectId)  REFERENCES [radar-db].dbo.Project (Id)
)
INSERT INTO [radar-db].dbo.UnitType ([Name]) VALUES ('Creatio'), ('Service Now'), ('Atlassian');
INSERT INTO [radar-db].dbo.[Level] ([Name]) VALUES ('J'), ('M'), ('S'), ('L');
INSERT INTO [radar-db].dbo.Specialization ([Name]) VALUES ('Founder'), ('Developer'), ('BA');
INSERT INTO [radar-db].dbo.Project ([Name], StartDate, EndDate) VALUES ('Daimler', '2021-12-13', null), ('HH', '2022-01-06', null), ('University', '2021-05-06', '2022-12-20');
INSERT INTO [radar-db].dbo.Employee (FirstName, LastName, Age, Src, LevelId, UnitTypeId, SpecializationId)
VALUES
(
	'Vitali', 'K.', 26,
	'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample98.jpg',
	(SELECT TOP 1 Id FROM [radar-db].dbo.[Level] WHERE [Name] = 'L'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.UnitType WHERE [Name] = 'Creatio'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.Specialization WHERE [Name] = 'Founder')
),
(
	'Mikhail', 'L.', 23,
	'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample97.jpg',
	(SELECT TOP 1 Id FROM [radar-db].dbo.[Level] WHERE [Name] = 'M'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.UnitType WHERE [Name] = 'Creatio'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.Specialization WHERE [Name] = 'Developer')
),
(
	'Pavel', 'L.', 30,
	'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg',
	(SELECT TOP 1 Id FROM [radar-db].dbo.[Level] WHERE [Name] = 'J'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.UnitType WHERE [Name] = 'Creatio'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.Specialization WHERE [Name] = 'Developer')
),
(
	'Sergey', 'R.', 30,
	'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample37.jpg',
	(SELECT TOP 1 Id FROM [radar-db].dbo.[Level] WHERE [Name] = 'J'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.UnitType WHERE [Name] = 'Creatio'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.Specialization WHERE [Name] = 'Developer')
),
(
	'Alina', 'S.', 21, 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample27.jpg',
	(SELECT TOP 1 Id FROM [radar-db].dbo.[Level] WHERE [Name] = 'J'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.UnitType WHERE [Name] = 'Creatio'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.Specialization WHERE [Name] = 'Developer')
),
(
	'Konstantin', 'D.', 30,
	'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample28.jpg',
	(SELECT TOP 1 Id FROM [radar-db].dbo.[Level] WHERE [Name] = 'S'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.UnitType WHERE [Name] = 'Creatio'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.Specialization WHERE [Name] = 'Developer')
),
(
	'Vlad', 'I.', 25, 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample29.jpg',
	(SELECT TOP 1 Id FROM [radar-db].dbo.[Level] WHERE [Name] = 'M'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.UnitType WHERE [Name] = 'Atlassian'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.Specialization WHERE [Name] = 'Developer')
),
(
	'Marina', 'L.', 22, 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample49.jpg',
	(SELECT TOP 1 Id FROM [radar-db].dbo.[Level] WHERE [Name] = 'M'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.UnitType WHERE [Name] = 'Service Now'),
	(SELECT TOP 1 Id FROM [radar-db].dbo.Specialization WHERE [Name] = 'Developer')
);
INSERT INTO [radar-db].dbo.EmployeeInProject (EmployeeId, ProjectId)
VALUES
((SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Mikhail' AND LastName = 'L.'), (SELECT TOP 1 Id FROM [radar-db].dbo.Project WHERE [Name] = 'Daimler')),
((SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Pavel' AND LastName = 'L.'), (SELECT TOP 1 Id FROM [radar-db].dbo.Project WHERE [Name] = 'Daimler')),
((SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Sergey' AND LastName = 'R.'), (SELECT TOP 1 Id FROM [radar-db].dbo.Project WHERE [Name] = 'Daimler')),
((SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Konstantin' AND LastName = 'D.'), (SELECT TOP 1 Id FROM [radar-db].dbo.Project WHERE [Name] = 'Daimler')),
((SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Sergey' AND LastName = 'R.'), (SELECT TOP 1 Id FROM [radar-db].dbo.Project WHERE [Name] = 'HH')),
((SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Alina' AND LastName = 'S.'), (SELECT TOP 1 Id FROM [radar-db].dbo.Project WHERE [Name] = 'HH')),
((SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Sergey' AND LastName = 'R.'), (SELECT TOP 1 Id FROM [radar-db].dbo.Project WHERE [Name] = 'University')),
((SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Pavel' AND LastName = 'L.'), (SELECT TOP 1 Id FROM [radar-db].dbo.Project WHERE [Name] = 'University'))
INSERT INTO [radar-db].dbo.Certification([Name], StartDate, EndDate, EmployeeId)
VALUES
('Creatio Developer (Advanced)', '2020-04-25', '2021-04-25',(SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Mikhail' AND LastName = 'L.')),
('Creatio Developer (Advanced)', '2021-04-22', '2022-04-22',(SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Mikhail' AND LastName = 'L.')),
('Creatio Developer (Advanced)', '2021-12-30', '2022-12-30',(SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Alina' AND LastName = 'S.')),
('Creatio Developer (Advanced)', '2021-04-30', '2022-04-30',(SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Pavel' AND LastName = 'L.')),
('Creatio Developer (Advanced)', '2021-03-30', '2022-03-30',(SELECT TOP 1 Id from [radar-db].dbo.Employee WHERE FirstName = 'Sergey' AND LastName = 'R.'));

