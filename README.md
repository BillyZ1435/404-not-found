# *RecruitMe*

*RecruitMe* is an application focused on accelerating the job search and talent acquisition process. We accomplish this by providing recruiters and job seekers the ability to complete the entire hiring process without the need for any third-party platforms to fill out forms or to conduct interviews.

## Installation
1. Install [Node](https://nodejs.org/en/download/current/)
2. To Install the dependencies starting from the main project directory and run in the command prompt.
```
sh firstinstall.sh
```
3. To start the web app run.
```
sh runapp.sh
```
4. The sh script takes care of the installation and activation
5. The default port  for accessing the frontend by which the app can be accessed is http://localhost:3000

## Contributing
We use the [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
- the ```master``` branch is for the latest stable production release.
- the ```dev``` branch contains the stable features for the next release.
- the ```feature``` branches are for developing new features. Should be in the form ```feature/<Jira ticket ID>: feature name```.
- the ```release``` branch is for bug fixes, documentation generation, and other release-oriented tasks.
- the ```hotfix``` branches are for patching production releases. Should be in the form ```hotfix/<Jira ticket ID>: feature name```.

We will use Jira for our ticketing. Pull requests are mandatory and need to be reviewed by at least 2 team members.
