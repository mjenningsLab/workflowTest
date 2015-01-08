#!/bin/zsh
function makeCodeSet {
	echo What is the property name\?
	read property
              if [ -e $property ]; then
                     echo This property exists\.
		     exit
              fi
             cd ~/$fileRoot/$client
	     mkdir $property
	     cd $property	
             cp ~/$fileRoot/basic/oo_conf_full.js ~/$fileRoot/$client/$property/oo_conf.js
             cp ~/$fileRoot/basic/oo_engine.min.js ~/$fileRoot/$client/$property/oo_engine.min.js
	     cp ~/$fileRoot/index.html ~/$fileRoot/$client/$property/index.html
             echo Do you want a js style sheet\?
                read answer
                        if [ "$answer" = "yes" ]; then
                                cp ~/$fileRoot/basic/oo_style.js ~/$fileRoot/$client/$property/oo_style.js
                        else
                                cp ~/$fileRoot/basic/oo_style.css ~/$fileRoot/$client/$property/oo_style.css
                        fi
                cp ~/$fileRoot/grunt/package.json ~/$fileRoot/$client/$property/package.json
		sudo npm install
		sudo npm install -g grunt-cli
		sudo npm install grunt-contrib-concat --save-dev
        	sudo npm install grunt-contrib-connect --save-dev
		cp ~/$fileRoot/grunt.js ~/$fileRoot/$client/$property/Gruntfile.js
}

function grabAssets {
	echo What is the Client\?
	read client
	echo What is the Property\?
	read property
	echo What do you need images for\?
	read imp
	if [ "$imp" = "tab" ]; then
		echo Is this tab type 1 or 2
		read type
		if [ "$type" = "1" ]; then 
			cp ~/$fileRoot/basic/oo_tab_icon_1.gif ~/$fileRoot/$client/$property/oo_tab_icon_1.gif
			exit
		else
			cp ~/$fileRoot/basic/oo_tab.png ~/$fileRoot/$client/$property/oo_tab.png
			cp ~/$fileRoot/basic/oo_tab_icon.gif ~/$fileRoot/$client/$property/oo_tab_icon.gif
		fi
	elif [ "$imp" = "inline" ]; then
		cp ~/$fileRoot/basic/oo_icon.gif ~/$fileRoot/$client/$property/oo_icon.gif
	elif [ "$imp" = "floating" ]; then
		cp ~/$fileRoot/basic/oo_float_icon.gif ~/$fileRoot/$client/$property/oo_float_icon.gif
	elif [ "$imp" = "invite" ]; then
		cp ~/$fileRoot/basic/oo_loading.gif ~/$fileRoot/$client/$property/oo_loading.gif
		cp ~/$fileRoot/basic/oo_opinionlab_logo.png ~/$fileRoot/$client/$property/oo_opinionlab_logo.png
		cp ~/$fileRoot/basic/oo_inv_monitor.html ~/$fileRoot/$client/$property/oo_inv_monitor.html
		cp ~/$fileRoot/basic/oo_inv_prompt.html ~/$fileRoot/$client/$property/oo_inv_prompt.html
	elif [ "$imp" = "waypoint" ]; then
		cp ~/$fileRoot/basic/oo_waypoint.html ~/$fileRoot/$client/$property/oo_waypoint.html
		cp ~/$fileRoot/basic/oo_opinionlab_logo.png ~/$fileRoot/$client/$property/oo_opinionlab_logo.png
		cp ~/$fileRoot/basic/icon_other.png ~/$fileRoot/$client/$property/icon_other.png
		cp ~/$fileRoot/basic/icon_product.png ~/$fileRoot/$client/$property/icon_product.png
		cp ~/$fileRoot/basic/icon_store.png ~/$fileRoot/$client/$property/icon_store.png
		cp ~/$fileRoot/basic/icon_web.png ~/$fileRoot/$client/$property/icon_web.png
	else
		exit
	fi
}

function makeTestPage {
	echo What is the Client\?
	read client
	echo What is the Property\?
	read property
	cd ~/$fileRoot/$client/$property
	grunt

}

function deployCode {
	echo What is the client\?
	read client
	echo What is the property\?
	read property
	echo What is the name
	read name
	echo Do you have a js or css style sheet\?
	read sheet
	echo Is this a waypoint or invite\?
	read addHtml
	cd ~/$fileRoot/$client/$property
	mkdir oinstallv5.9_$name
	cp ~/$fileRoot/basic/includeV5.txt ~/$fileRoot/$client/$property/oinstallv5.9_$name/includeV5.txt
	cp ~/$fileRoot/basic/onlineopinion_quick_start_V5.pdf ~/$fileRoot/$client/$property/oinstallv5.9_$name/onlineopinion_quick_start_V5.pdf
	cp ~/$fileRoot/basic/onlineopinion_user_manual_code_set_v5.pdf ~/$fileRoot/$client/$property/oinstallv5.9_$name/onlineopinion_user_manual_code_set_v5.pdf
	cd oinstallv5.9_$name
	mkdir onlineopinionV5
	cp ~/$fileRoot/$client/$property/oo_engine.min.js ~/$fileRoot/$client/$property/oinstallv5.9_$name/onlineopinionV5/oo_engine.min.js
        cp ~/$fileRoot/$client/$property/oo_conf_$name.js ~/$fileRoot/$client/$property/oinstallv5.9_$name/onlineopinionV5/oo_conf_$name.js
        cp ~/$fileRoot/$client/$property/oo_style.$sheet ~/$fileRoot/$client/$property/oinstallv5.9_$name/onlineopinionV5/oo_style.$sheet
		if [ "$addHtml" = "invite" ]; then
                        ~/$fileRoot/$client/$property/oo_inv_monitor.html ~/$fileRoot/$client/$property/oinstallv5.9_$name/onlineopinionV5/oo_inv_monitor.html
                        ~/$fileRoot/$client/$property/oo_inv_prompt.html ~/$fileRoot/$client/$property/oinstallv5.9_$name/onlineopinionV5/oo_inv_prompt.html
                elif [ "$addHtml" = "waypoint" ]; then
                        ~/$fileRoot/$client/$property/oo_waypoint.html ~/$fileRoot/$client/$property/oinstallv5.9_$name/onlineopinionV5/oo_waypoint.html
                fi
	cp ~/$fileRoot/$client/$property/*.png ~/$fileRoot/$client/$property/oinstallv5.9_$name/onlineopinionV5
	cp ~/$fileRoot/$client/$property/*.gif ~/$fileRoot/$client/$property/oinstallv5.9_$name/onlineopinionV5
	cd ~/$fileRoot/$client/$property
        zip -r oinstallv5.9_$name.zip oinstallv5.9_$name
	scp /Users/$USER/$fileRoot/$client/$property/oinstallv5.9_$name.zip $USER@192.168.27.56:/reports/extranet/clients/Testing/melissa

}
