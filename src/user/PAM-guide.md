# PAM guide

Guide for assessment and user management through the backend.

## In general

### Overview

* Clicking any of the secondary menu items will take you to an overview page of the selected item type. E.g. clicking `Assessments`>`Assessments`

  ![Menu](assets/menu.png)

  Will show you an overview of all existing assessments.
  
  ![Assessment overview](assets/assessment-overview.png)

* Item deletion: **Coming soon**
* Item editing: click on the value in the first column of the overview:

  ![Editing items](assets/editing-items.png)
  
  Will take you to the item specific editor:
  
  ![Item editor](assets/item-editor.png)
  
### Interface elements

Most interface elements are common in both outlook and behaviour, however there's some tips and tricks:

* I you want to remove a value from a selection box, click the small `x`-mark:

  ![Removing a value from a selection box](assets/remove-value-in-selectionbox.png)

* If you have selected a value in a drop-down list, but you want to deselect it (without selecting another one) click the small `x`-mark:

  ![Removing a value from a drop-down list](assets/remove-value-from-dropdown.png)
  
  If no `x`-mark is shown, it means a value **is required**.
  
## Adding Assessments

### Create Assessments

1. Click on `Assessments`>`Assessments`>`Create Assessment`

  ![Creating assessments](assets/creating-assessments.png)

1. This will allow you to create the assessment and add essential details in-place:

  ![Creating an assessment: details](assets/creating-assessments-detail.png)
  
1. However, it's not over yet. This simply created the `Assessment`, but if you wish to fill in more of its fields, you'll have to do this in the `Assessment` editor:

  ![Assessment Editor](assets/assessment-editor.png)
  
  * __Description__: Please fill out a clear and concise description of the assessment. This will appear in the tool as:
    
    ![Assessment description](assets/assessment-editor.png)  

  * __Phases__: These define the various steps the assessor will need to perform in one comparison. At the moment, all phases should be included, **in the exact same order as below**:
  
    ![Assessment phases](assets/assessment-phases.png)

  * __Comparisons Num__: Define the number of comparisons each assessor needs to make in an assessment.
  * __State__: By default an `Assessment` is in a "draft" state. This means that assessors **will not** be able to select this assessment for comparisons. It is useful to allow the PAM to create an assessment up-front and fill in the details over a period of time, without showing up in the assessment selection screen of the tool. **Select "published" once you're done with an assessment and want to enable it in the tool**:
  
    ![Assessesment states](assets/assessment-states.png)

## Adding Assessees and their representations

### Create Organisations

First of all we need to make sure the necessary `Organisation`s are added:

1. Click on `Users`>`Organisations`>`Create Organization`

  ![Creating organisations](assets/creating-organizations.png)

1. This will allow you to create the organisation in-place
  
  ![Creating an organisation: fill out details](assets/creating-organizations-details.png)

1. Clicking the `Create`-button will take you to the `Organisation` editor. To create another `Organisation`, use the shortcut:
  
### Creating Users

Next we need to **create a `user` for _each_ assessee**:

1. Click on `Users`>`Users`>`Create User`

  ![Creating users](assets/creating-users.png)
  
1. Again, creating a `User` happens in-place:
 
  ![Creating users: fill out details](assets/creating-users-details.png)

  All fields are mandatory, except for `Organization`. The e-mail address **has to be unique** in the database.
  
1. Clicking the `Create`-button will take you to the `User` editor. To create another `User`, use the shortcut:

  ![Create another user](assets/create-another-user.png)

### Creating Personas

Next we need to define what `role` a `user` has in an `assessment`. Any user can perform different roles in different assessments, hence we need to explicitly declare this.

**Create a `persona` for _each_ assessee`**

1. Click on `Users`>`Personas`>`Create Persona`

  ![Creating personas](assets/creating-personas.png)
  
1. In-place provide the details:
  
  ![Creating Personas: fill out details](assets/creating-personas-details.png)

  **All fields are mandatory**
  
1. Clicking the `Create`-button will take you to the `Persona` editor. To create another `Persona`, use the shortcut:

  ![Create another Persona](assets/persona-editor.png)
  
### Creating Representations

Creating a `representation` for an assessee is a two-phased process:

#### Create the `representation`

1. Click on `Users`>`Representations`>`Create Representation`
 
  ![Creating representations](assets/creating-representations.png)

1. In-place link it to a `User` and `Assessment`:
 
  ![Creating representations: fill out details](assets/creating-representations-details.png)

#### Upload the file

> **PLEASE DO NOT FORGET THIS STEP**

1. Clicking the `Create`-button will take you to the `Representation` editor. Here we need to upload the representation file:

  ![Upload the representation file](assets/upload-representation.png)
  
  Clicking `Upload` will open an operating system specific file browse dialog. E.g. on Mac OS X:
  
  ![OS-specific file browser](assets/file-browser.png)

1. Select the file on your file system you wish to upload and click `open` (or a similar button, depending on your operating system)

1. This will take you back to the `Representation` editor. **We still need to confirm the upload of the file by clicking the `Save`-button!!**:

  ![Upload the file](assets/save-representation.png)
  
1. To create another `Representation`, use the shortcut:

  ![Create another representation](assets/create-another-representation.png)
