Login and Logout Project:

##Splash Screen
-> when project will run, it will show a splash screen for three seconds
-> After three seconds, it will go to Login Screen for user input
-> if the user previously loggedIn, it will redirect to Dashboard screen, otherwise Login screen


##Login Screen
-> User can not move to dashboard screen without putting proper right credentials.
-> Form validation is working properly here, it will  check if user hasn't filled any of the input.
-> we are sending Token from local storage, as it's very confidential. We can also use it as input(According to requirement).
-> After Right credentials, it will rediect to Dashboard.
-> there is an recovery password button.
-> There are three links(Google, Facebook, and AppleId), through user can login too.

##Dashboard Screen
-> Once user is logged in, it will always display dashboard(Not Login), after killing the application.
-> First of all, it will show a Logout Button, as there are alot of list Views. User will not be happy in scrolling till last listview, and then logging out.
-> There is a list view, that is showing ID, TITLE, and BODY data.
-> When user will click on logout, it will clear all the user data, and will redirect user to LOGIN screen.
