# PAM guide

Guide for assessment and user management through the backend.

## Atomic operations

### Adding Assessees and their representations

#### Create Organisations

First of all we need to make sure the necessary `Organisation`s are added:

1. Click on `Users`>`Organisations`>`Create Organization`

  ![Creating organisations](https://www.evernote.com/shard/s59/sh/56830830-76ae-4803-8760-0a3b12719f72/1ea1d92d2f0321c7edc7d88b76876a79/res/f40e6560-a000-4602-857d-42a74baacda2/skitch.png)

1. This will allow you to create the organisation in-place
  
  ![Creating an organisation: fill out details](https://www.evernote.com/shard/s59/sh/070cc1c5-6348-47eb-b4f2-bf997196d353/6ab50c182f1b53a2982971091598f388/res/fc77f1ff-071f-4352-b504-304235afacdf/skitch.png)

1. Clicking the `Create`-button will take you to the `Organisation` editor. To create another `Organisation`, use the shortcut:
  
#### Creating Users

Next we need to **create a `user` for _each_ assessee**:

1. Click on `Users`>`Users`>`Create User`

  ![Creating users](https://www.evernote.com/shard/s59/sh/649ac075-3a9d-43a1-8eaa-be3b766dd2a3/3567e1d3202b9ffde9c9c73a406a84a1/res/9f5f82ce-c739-4a66-8da5-04dcd8fe0448/skitch.png)
  
1. Again, creating a `User` happens in-place:
 
  ![Creating users: fill out details](https://www.evernote.com/shard/s59/sh/09cd1198-36d5-4a65-be58-ffa4a9e203db/da5e35bbb3e488e0097c1cd1e0fa7912/res/c88680a4-e870-4600-808f-c31e24ee11ef/skitch.png)

  All fields are mandatory, except for `Organization`. The e-mail address **has to be unique** in the database.
  
1. Clicking the `Create`-button will take you to the `User` editor. To create another `User`, use the shortcut:

  ![Create another user](https://www.evernote.com/shard/s59/sh/4bb2421c-d0c4-468a-9fd0-07c9b2ff16d9/265bd955a81d35a500efe0c67a79fc29/res/b8c47a3e-854b-4215-ac1c-959e897c3f1b/skitch.png)

#### Creating Personas

Next we need to define what `role` a `user` has in an `assessment`. Any user can perform different roles in different assessments, hence we need to explicitly declare this.

**Create a `persona` for _each_ assessee`**

1. Click on `Users`>`Personas`>`Create Persona`

  ![Creating personas](https://www.evernote.com/shard/s59/sh/28d4979c-cdec-47ad-a82e-437a950d3ecf/f77000f4d5605e0220a313bdc654c679/res/631b8801-e272-4fec-a48c-3c25ba3308f8/skitch.png)
  
1. In-place provide the details:
  
  ![Creating Personas: fill out details](https://www.evernote.com/shard/s59/sh/5c699d11-2514-449f-9fbc-e9890ed27d5b/4393dbc453e590709b2369830bf5e4d8/res/1fc5ee34-04d2-4372-bdcc-e526b2bb4cc5/skitch.png)

  **All fields are mandatory**
  
1. Clicking the `Create`-button will take you to the `Persona` editor. To create another `Persona`, use the shortcut:

  ![Create another Persona](https://www.evernote.com/shard/s59/sh/feebb548-cafe-4a5d-8913-765908480d5e/4e5ef0b2b503e0064f883094768e733f/res/7e2d98b9-9984-44e7-8756-5edb841b4487/skitch.png)
