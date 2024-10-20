# Ferrari API Documentation

This API allows you to manage Ferrari and Ford car data. Below are the available endpoints for creating, reading, updating, and deleting Ferrari cars from the database.

All examples are set up for Ferrari but to get Ford data just type ford in the place of Ferrari
## Base URL:

https://three41-final.onrender.com

## Use Swagger UI For all CRUD Commands
https://three41-final.onrender.com/api-docs

## Endpoints

### 1. **Get All Ferraris**

- **URL**: `/api/ferrari`
- **Method**: `GET`
- **Description**: Retrieves a list of all Ferrari cars from the database.
- **Response**:
    - **200**: Successfully retrieved the list of Ferraris.
    - **500**: Error retrieving Ferraris.

**Example Response**:

```
[
   {
      "_id": "60a7b4f65f627b1784c9b2a6",
      "model": "Ferrari 488 GTB",
      "year": 2024,
      "engine": "3.9L V8",
      "horsepower": 661,
      "top_speed": "205 mph",
      "image": "https://example.com/ferrari_488_gtb.jpg"
   }
]

```

### 2. **Get a Single Ferrari**

- **URL**: `/api/ferrari/:id`
- **Method**: `GET`
- **Description**: Retrieves details of a specific Ferrari by its ID.
- **Response**:
    - **200**: Ferrari found and returned successfully.
    - **404**: Ferrari not found.
    - **500**: Error retrieving the Ferrari.

**Example Response**:
```
{
   "_id": "60a7b4f65f627b1784c9b2a6",
   "model": "Ferrari 488 GTB",
   "year": 2024,
   "engine": "3.9L V8",
   "horsepower": 661,
   "top_speed": "205 mph",
   "image": "https://example.com/ferrari_488_gtb.jpg"
}
```

### 3. **Create a New Ferrari**

- **URL**: `/api/ferrari`
- **Method**: `POST`
- **Description**: Adds a new Ferrari to the database.
- **Request Body**:
```
{
   "model": "Ferrari 488 GTB",
   "year": 2024,
   "engine": "3.9L V8",
   "horsepower": 661,
   "top_speed": "205 mph",
   "image": "https://example.com/ferrari_488_gtb.jpg"
}

```
- **Response**:
    - **201**: Ferrari created successfully.
    - **500**: Error creating the Ferrari.

**Example Response**:

```
{
   "message": "Ferrari created successfully"
}
```

### 4. **Update an Existing Ferrari**

- **URL**: `/api/ferrari/:id`
- **Method**: `PUT`
- **Description**: Updates the details of an existing Ferrari by its ID.
- **Request Body**:
```
{
   "model": "Ferrari 488 GTB",
   "year": 2024,
   "engine": "3.9L V8",
   "horsepower": 661,
   "top_speed": "205 mph",
   "image": "https://example.com/ferrari_488_gtb.jpg"
}
```
- **Response**:
    - **200**: Ferrari updated successfully.
    - **404**: Ferrari not found or no changes made.
    - **500**: Error updating the Ferrari.

**Example Response**:

```
{
   "message": "Ferrari updated successfully"
}
```
### 5. **Delete a Ferrari**

- **URL**: `/api/ferrari/:id`
- **Method**: `DELETE`
- **Description**: Deletes a specific Ferrari by its ID.
- **Response**:
    - **200**: Ferrari deleted successfully.
    - **404**: Ferrari not found.
    - **500**: Error deleting the Ferrari.

**Example Response**:

```
{
   "message": "Ferrari deleted successfully"
}
```

### Created By
Tiffany Voorhees & Luke Briggs & Jonathan Aloya