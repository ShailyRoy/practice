fish # use fish for better command prompt

git config --global user.name "Sam Smith"
git config --global user.email sam@example.com  #configure author name and mail for commiting

git clone ssh_link directory_folder		#clone a repository using ssh link. to use ssh linki you need to configure public key of github account.

git remote add origin <server> 			 #connect to a remote repository

git remote -v #list of configured repository

echo 'message'>filename.type			 #creates a file

git add . #add files for commiting

$ git commit -am 'commit message'                # Add & commit
$ git commit --allow-empty -m k3;                # Commit empty change
$ git cherry-pick <commit-hash>                  # Take a commit change of another branch

git push origin master 				 # push all commit to remote master branch

$ git add task2.txt                              # Add any file
$ git commit --amend --no-edit                   # Don't change commit message, merge staged changes with previous commit
$ git commit --amend -m 'new message'            # Merge current change to previous commit and will also change the commit hash
$ git commit --amend --date="<date>"             # Override the date

git status 					#To see the list of files and their status

##Branching
 
git branch branch_name 				#creates new branch

git checkout -b <branchname> 			#creates new branch and switch to it

git checkout <branchname>			 #switch to another branch

$ git checkout - 				#Quick switch to a previous branch

git branch					 #shows the list of all branch

git branch -d <branch-name>			 #delete branch from local server

git push origin --delete branch_name 		#delete branch from remote server

git push --all origin				 # push all branch to remote server

git push origin branch_name			 #push branch to origin

git pull 					#update local server from remote repository

git merge branchname				 #merge branch with active branch

git diff 					#see the merge conflicts

$ git checkout master
$ git branch | xargs git branch -D 		#Delete all the local branch(es) except master

$ git branch --merged | grep -E '^\*|master$' | xargs -n 1 git branch -D
						#Delete all the branches except master that are already merged with current branch.

git branch --no-merged				 #See list of local and remote branches that are merged with current branch.

$ git branch --merged master    		# branches that are merged with 'master' branch

$ git branch -m <new-name>            		  # rename the current branch

$ git branch <old-name> <new-name>    		  # rename without checking out that branch

$ git checkout --orphan <branch-name>            # Create a branch with no commit list

$ git cherry-pick <commit-hash>                             # Copy a single commit to current branch

$ git cherry-pick <hash> <hash>                             # pick multiple commits

$ git stash save                                    # Save the changes in temporary box
$ git stash save "provide a stash message"          # We can provide a stash message when stashing.
$ git stash save -u                                 # stash untracked files
$ git stash save --include-untracked                # stash untracked files
$ git stash --all                                   # Keep all files (even ignored ones!)

# resolve conflicts when doing stash pop
$ git checkout stash -- .                           # replace all the files with the stashed version

$ git log                                          # Show  all the change/commit history
$ git log <branch-name>                            # Show the commits of a specific branch
$ git log <branch1>..<branch2>                     # Show all commits between two branches 

$ git show <commit-hash>                # see what changes in a specific commit
$ git show <commit> --stat              # see files changed in a commit

$ git push -f origin <branch-name>                     # by force overwrite the remote branch and also commits

$ git checkout <admin_branch>
$ git rebase master                                    # Merge all commits of admin_branch after master's commits
$ git checkout master
$ git branch master.bac                                # Backup master branch if necessary

HEAD~2      :    2 commits older than HEAD
HEAD^2      :    the second parent of HEAD, if HEAD was a merge, otherwise illegal
HEAD@{2}   :    refers to the 3rd listing in the overview of git reflog
HEAD~~      :    2 commits older than HEAD
HEAD^^      :    2 commits older than HEAD

git tag 1.0.0 <commitID>  				#tag release

git fetch origin
git reset --hard origin/master			# to drop all your local changes and commits, fetch the latest history from the server and point your local master branch at it, do this:
