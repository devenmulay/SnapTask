const employees = 
    [
        {
            "id": 1,
            "firstName": "Aarav",
            "email": "employee1@example.com",
            "password": "123",
            "taskNumbers": {
                "active": 1,
                "newTask": 1,
                "completed": 0,
                "failed": 0
            },
            "tasks": [
                {
                    "title": "Design Homepage",
                    "description": "Create a modern UI for the homepage",
                    "date": "2025-02-10",
                    "category": "Design",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Fix Navbar Bug",
                    "description": "Resolve the alignment issue in the navbar",
                    "date": "2025-02-12",
                    "category": "Development",
                    "active": false,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                }
            ]
        },
        {
            "id": 2,
            "firstName": "Vihaan",
            "email": "employee2@example.com",
            "password": "123",
            "taskNumbers": {
                "active": 1,
                "newTask": 1,
                "completed": 0,
                "failed": 0
            },
            "tasks": [
                {
                    "title": "Database Optimization",
                    "description": "Improve query performance",
                    "date": "2025-02-15",
                    "category": "Backend",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "API Documentation",
                    "description": "Write detailed API docs",
                    "date": "2025-02-18",
                    "category": "Documentation",
                    "active": false,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                }
            ]
        },
        {
            "id": 3,
            "firstName": "Karthik",
            "email": "employee3@example.com",
            "password": "123",
            "taskNumbers": {
                "active": 1,
                "newTask": 1,
                "completed": 0,
                "failed": 0
            },
            "tasks": [
                {
                    "title": "Client Meeting",
                    "description": "Discuss project roadmap",
                    "date": "2025-02-20",
                    "category": "Management",
                    "active": false,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Security Update",
                    "description": "Apply latest security patches",
                    "date": "2025-02-22",
                    "category": "IT Security",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                }
            ]
        },
        {
            "id": 4,
            "firstName": "Rohan",
            "email": "employee4@example.com",
            "password": "123",
            "taskNumbers": {
                "active": 1,
                "newTask": 1,
                "completed": 0,
                "failed": 0
            },
            "tasks": [
                {
                    "title": "Code Review",
                    "description": "Review PR #45",
                    "date": "2025-02-25",
                    "category": "Development",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Write Test Cases",
                    "description": "Improve unit test coverage",
                    "date": "2025-02-28",
                    "category": "Testing",
                    "active": false,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                }
            ]
        },
        {
            "id": 5,
            "firstName": "Ishaan",
            "email": "employee5@example.com",
            "password": "123",
            "taskNumbers": {
                "active": 1,
                "newTask": 1,
                "completed": 0,
                "failed": 0
            },
            "tasks": [
                {
                    "title": "Bug Fixing",
                    "description": "Resolve reported UI issues",
                    "date": "2025-03-01",
                    "category": "Development",
                    "active": true,
                    "newTask": false,
                    "completed": false,
                    "failed": false
                },
                {
                    "title": "Sprint Planning",
                    "description": "Plan next sprint with the team",
                    "date": "2025-03-05",
                    "category": "Project Management",
                    "active": false,
                    "newTask": true,
                    "completed": false,
                    "failed": false
                }
            ]
        }
    ];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
];

export function setLocalStorage(){
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export function getLocalStorage(){
    const employees = JSON.parse(localStorage.getItem('employees'))  //JSON.parse- in the form of array or objects
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
}
