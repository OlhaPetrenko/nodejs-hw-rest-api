# GoIT Node.js Educational project REST-API

This project is the result of training at the Fullstack Bootcamp-23 course from the GoIT company. The application is an API for working with contacts and contains a complete set of CRUD-operations.

***
## This Project
### On the back-end:
+ the app starts at `server.js`
+ add frameworks and packages in `package.json`
+ safely store app secrets in `.env`
+ all the logic of the API is in the file `routes/api/contacts`
+ query handler functions can be viewed in  `controllers/ contacts`'s files
  

***
### Commands

- `npm install` - installation project dependencies
- `npm start` - start the server in production mode 
- `npm run start:dev` - start the server in development mode
- `npm run lint` - running a code check with eslint
- `npm run lint:fix` - running a code check with eslint with automatic fixes for simple errors

***
### Contacts

```javaScript
{
  _id: ObjectId('6361266c5f57f090179ebece'),
  name: "Allen Raymond",
  email: "nulla.ante@vestibul.co.uk",
  phone: "(992) 914-3792",
  favorite: false
}
```
Contacts are identified by unique identifier. Properties email and phone must be unique too. An additional description of the Contact structure is given in the table.


Field   |  Type  |   Description              | isRequired
--------|--------|----------------------------|------------
_id     |string  |The contacts 's unique identifier|is required
name    |string  |The contacts 's name.       |is required
email   |string  |The contacts 's email.      |is required
phone   |string  |The contacts 's phone.      |is required
favorite|boolean |Is favorite contact.        |is not required

***
### Main routes
+ **GET**    
  *BASE_URL/api/contacts* - search and get all contacts
+ **GET**   
  *BASE_URL/api/contacts/:contactId* - search and get one contact by id
+ **POST**   
    *BASE_URL/api/contacts/* - add the contact to the collection
+ **PUT**  
  *BASE_URL/api/contacts/:contactId* - update contact's infomation
+ **PATCH**     
  *BASE_URL/api/contacts/:contactId/favorite* - update only fiels "favorite" in contact's infomation
+ **DELETE**  
  *BASE_URL/api/contacts/:contactId* - delete one contact by id
  
 (^_^)  
