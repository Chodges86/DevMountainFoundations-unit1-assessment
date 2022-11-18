/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

const gitDefinition = "git is a version control software that allows you to create snapshots of your project or code at certain versions and return your project or code to that version if needed and branch off to create additions to the project that will be added to the main branch later using a merge"


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

const gitHubDefinition = "GitHub is a website that allows you to store your project or code's git commits into a remote repository that can be accessed if your local repos are messed up.  It also allows others to access your repos to view and/or fork or copy your project and edit it.  They can then request that you pull their version into your own."


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

const gitInitDefinition = "A command that enables git tracking of a directory on your computer"

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

const gitCloneDefinition = "a command that allows you to copy a git repository."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

const gitStatusDefinition = "Allows you to view certain details about the state of a git repo.  This includes the current branch and if files are currently containing data that is untracked.  These files will be shown in red if they are unstaged and green if they are staged.  No files that in the same state as the last commit will show up using this command"


//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

const gitAddDefinition = "A command that allows you to add files to the staging area so that they can be committed in the git repo.  Usually any files that are in red when a git status command is done should be added unless you don't want to track that file"
const gitAddCode = "git add ."

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

const gitCommitDefinition = "A command that creates a snapshot of the current version of your project or code.  A commit has an identification number that can be used to return your code to that version"
const gitCommitCode = 'git commit -m "initial commit"'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

const gitPushDefinition = "A command that sends your latest git commit to your remote repository"
