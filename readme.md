# Duty Planner React Web App

A pure frontend duty planner app made using React, Redux, and hosted with Firebase.

This app is developed for use on mobile devices, it has not been optimized for desktop/laptop users.

<https://duty-planner-plad.web.app/>

## Update Log

### V1.5
Added backup and restore functionality
Revamped side menu to have both table customization menu and backup menu.
### V1.4
Added funtion to add tables individually and edit individual names of tables.
Slightly better animation for table menu from the side

## How to use

### Creating tables
Upon opening the app, you will be prompted to add a new table.
The table menu  which opens from the side provides options to customize your table.

1. Headings: specify the column headings for the table
2. Timing Input (auto): Enter the start time, end time, and the number of shifts in the day. The app will automatically generate table with the corresponding shifts as the row headings
3. Timing Input (manual): Enter all of the shift timings in the input box, separated by commas
4. Click on the "Add Table" button to create a table based on your specifications

- The timing input method is chosen by toggling the "Manual Timing Input" button

### Adding Names
After adding the table, you can add the names of the duty personnel and assign them to their respective shifts

1. Click on the edit button in the bottom-right corner to open the name list menu
2. Input names of duty personnel in the text box, separated by commas.
3. Click on the checkmark button to update the name list. The app will automatically switch to a list display of all the names. All of the names will be color automatically
4. To assign to names to their respective shifts, click on any name in the list, then click on a cell in any of the table.
5. To edit the name list, simply click on the edit toggle on the top-right corner of the name list menu.
6. If you made a mistake when assigning the list, you can click on the undo button on the top right of the screen to undo your actions

### Autofill
The autofill function works by filling in cells from left to right, top to bottom, with the list of names given in sequence.
In the autofill menu, you can choose the names and columns of the table to exclude from the autofill sequence. You can also choose which name to start the autofill sequence with. After that, simply click the autofill button to fill up the table.
You can undo the autofill with the undo button.


### Backup
Backing up is simple. At any point you want to save your work, simply go to the side menu, click on the "Backup" tab, then click down backup. Your tables (both filled and empty), and other customization options will be saved in the downloaded file.

To load the savefile, simply click on "Upload File", then "Load Backup"\

You can also use the backup function to save "templates", with empty tables and complete namelists so you don't need to manually enter the names of the duty personnel and table headings each time.

Note that loading a backup will wipeout all of the existing data, please download the existing data first if you would like to keep it.
### Alternate usage
It is also entirely possible to assign names to the column headings, then put the work positions in the name list. Please feel free to adapt to your use case.



