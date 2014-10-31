# PAM guide

Guide for assessment and user management through the backend.

## Atomic operations

### In general

#### Overview

* Clicking any of the secondary menu items will take you to an overview page of the selected item type. E.g. clicking `Assessments`>`Assessments`

  ![Menu](https://www.evernote.com/shard/s59/sh/b5059791-0ccb-4498-9f9b-2bb835dd28dd/15c5aa576ca81e78acababfe7eff0ae4/res/f3776cee-2d74-4eb0-9cae-8d0756dcb622/skitch.png)

  Will show you an overview of all existing assessments.
  
  ![Assessment overview](https://www.evernote.com/shard/s59/sh/bdcf0ffe-c3b2-4a57-8a65-c78000e286a4/4093079cbcde669cc1b50fffb96523cd/res/c13f8734-0a9c-4d83-8ea6-4cc2afc71ea0/skitch.png)

* Item deletion: **Coming soon**
* Item editing: click on the value in the first column of the overview:

  ![Editing items](https://www.evernote.com/shard/s59/sh/bdcf0ffe-c3b2-4a57-8a65-c78000e286a4/4093079cbcde669cc1b50fffb96523cd/res/a978fe21-a7ff-4cfd-87d8-5f685c814f8d/skitch.png)
  
  Will take you to the item specific editor:
  
  ![Item editor](https://www.evernote.com/shard/s59/sh/a323ebee-6677-4d30-883e-24235175eab3/684284666fcb310ec7027ae7d50aa24f/res/f2c7e1d0-1aea-4acb-bf25-cd2c5ce6bfcd/skitch.png)
  
#### Interface elements

Most interface elements are common in both outlook and behaviour, however there's some tips and tricks:

* I you want to remove a value from a selection box, click the small `x`-mark:

  ![Removing a value from a selection box](https://www.evernote.com/shard/s59/sh/7b0abd2f-38a5-4695-96e7-021ea7434da1/655f1b7e1b4dbfe923d73e717b923bf7/res/c6046cb7-e04d-4686-90b4-919eff3aef29/skitch.png)

* If you have selected a value in a drop-down list, but you want to deselect it (without selecting another one) click the small `x`-mark:

  ![Removing a value from a drop-down list](https://www.evernote.com/shard/s59/sh/ca573119-ec79-4915-8809-018d4c2ebd99/c391e1a3b46b5676711a166a4c14fac5/res/067b45d7-c2bb-4088-bbda-3d46a59e3daa/skitch.png)
  
  If no `x`-mark is shown, it means a value **is required**.
  
### Adding Assessments

#### Create Assessments

1. Click on `Assessments`>`Assessments`>`Create Assessment`

  ![Creating assessments](https://www.evernote.com/shard/s59/sh/7e68c405-5090-4095-a3a1-5cc4374a928b/fe3610c3fd079d09b0ae8eef5906701f/res/5b8adfa4-6c9f-4ecc-a39f-f45a3717caf1/skitch.png?resizeSmall&width=832)

1. This will allow you to create the assessment and add essential details in-place:

  ![Creating an assessment: details](https://www.evernote.com/shard/s59/sh/89183d6b-1f9d-4027-a50c-9ac98ac15efb/a6d86086a131ee8af4c915755e1b92b7/res/8058a574-97c7-4f0b-8ba3-7bdc07733ae8/skitch.png)
  
1. However, it's not over yet. This simply created the `Assessment`, but if you wish to fill in more of its fields, you'll have to do this in the `Assessment` editor:

  ![Assessment Editor](https://www.evernote.com/shard/s59/sh/8655cd08-78d0-483b-b5a6-b3896b3b8b82/73ebee1535141edee585e5cc5be12ae9/res/e5e83778-f064-407a-982c-0501b6e82932/skitch.png)
  
  * __Description__: Please fill out a clear and concise description of the assessment. This will appear in the tool as:
    
    ![Assessment description](https://www.evernote.com/shard/s59/sh/7a31d5aa-4ff1-449e-8b7e-f5e2c4405f51/46541bd202bee35fa76a2f98b9acbb9f/res/92d78b6f-5f8e-4d50-ad2a-9095be36fc59/skitch.png)  

  * __Phases__: These define the various steps the assessor will need to perform in one comparison. At the moment, all phases should be included, **in the exact same order as below**:
  
    ![Assessment phases](https://www.evernote.com/shard/s59/sh/8655cd08-78d0-483b-b5a6-b3896b3b8b82/73ebee1535141edee585e5cc5be12ae9/res/3443631a-cc14-46f2-b69d-19f9bd5abb40/skitch.png)

  * __Comparisons Num__: Define the number of comparisons each assessor needs to make in an assessment.
  * __State__: By default an `Assessment` is in a "draft" state. This means that assessors **will not** be able to select this assessment for comparisons. It is useful to allow the PAM to create an assessment up-front and fill in the details over a period of time, without showing up in the assessment selection screen of the tool. **Select "published" once you're done with an assessment and want to enable it in the tool**:
  
    ![Assessesment states](https://www.evernote.com/shard/s59/sh/8655cd08-78d0-483b-b5a6-b3896b3b8b82/73ebee1535141edee585e5cc5be12ae9/res/b18c5247-e752-4f20-8729-104c1efdf271/skitch.png)

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
  
#### Creating Representations

Creating a `representation` for an assessee is a two-phased process:

##### Create the `representation`

1. Click on `Users`>`Representations`>`Create Representation`
 
  ![Creating representations](https://www.evernote.com/shard/s59/sh/32a22366-93d6-4be7-b2f8-474a10e32014/40b442164577d15d7077ed1112bbef36/res/cb246d95-705c-42d2-9dcd-4cec2e91f8db/skitch.png)

1. In-place link it to a `User` and `Assessment`:
 
  ![Creating representations: fill out details](https://www.evernote.com/shard/s59/sh/fb9fa913-c647-4dc3-87a1-2bef28744e78/8cf1933793f318f7d0577f1872ac342b/res/87e21430-ade5-4dfe-b206-f299735a45dc/skitch.png)

##### Upload the file

> **PLEASE DO NOT FORGET THIS STEP**

1. Clicking the `Create`-button will take you to the `Representation` editor. Here we need to upload the representation file:

  ![Upload the representation file](https://www.evernote.com/shard/s59/sh/798a832d-af1d-40eb-a467-52b18821588c/907ff28e49554b5a4bab70aece68cc38/res/71ae6588-9015-41a3-baed-135654b791d8/skitch.png)
  
  Clicking `Upload` will open an operating system specific file browse dialog. E.g. on Mac OS X:
  
  ![OS-specific file browser](https://www.evernote.com/shard/s59/sh/468f1e02-27a1-4a4b-9547-d1696260f624/98669607397bc8ae933f224a1186ceb7/res/8629d619-9432-4ed9-a319-bd9f201458d4/skitch.png)

1. Select the file on your file system you wish to upload and click `open` (or a similar button, depending on your operating system)

1. This will take you back to the `Representation` editor. **We still need to confirm the upload of the file by clicking the `Save`-button!!**:

  ![Upload the file](https://www.evernote.com/shard/s59/sh/798a832d-af1d-40eb-a467-52b18821588c/907ff28e49554b5a4bab70aece68cc38/res/c79dcdf4-70a7-458d-af57-f2481bdfabc0/skitch.png)
  
1. To create another `Representation`, use the shortcut:

  ![Create another representation](https://www.evernote.com/shard/s59/sh/798a832d-af1d-40eb-a467-52b18821588c/907ff28e49554b5a4bab70aece68cc38/res/e716af11-62bf-4aad-ae39-7dcb25f899c0/skitch.png)
