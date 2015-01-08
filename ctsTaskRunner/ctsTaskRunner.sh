#!/bin/zsh
source ~/ctsScripts.sh
fileRoot="ol/git/workflowTest"
echo CTS Task Runner
echo What do you want to do\?
echo 1. Create a Folder\.
echo 2. Grab assets\.
echo 3. Test My File\.
echo 4. Deploy My Code\. 
echo Please type the number of your choice\.
read choice
if [ "$choice" = "1" ]; then
	cd ~/$fileRoot
	echo Do you want to create a new Client folder or subfolder\?
	read folderChoice
	declare -l folderChoice
        	if [ "$folderChoice" = "end" ]; then
                exit
        	elif [ "$folderChoice" = "folder" ]; then
                	echo What is the Client name\?
                	read client
                	declare -l client
                        	if [ -e $client ]; then
                                	echo This Client has a folder\. Please make a subfolder\.
                                fi
                        mkdir $client
			cd $client
                        makeCodeSet $client
        elif [ "$folderChoice" = "subfolder" ]; then
                echo What is the Client name\?
		read client
                cd $client
                makeCodeSet $client
	else
		exit
        fi
elif [ "$choice" = "2" ]; then
	grabAssets
elif [ "$choice" = "3" ]; then
	makeTestPage
elif [ "$choice" = "4" ]; then
	deployCode
else
	exit
fi
