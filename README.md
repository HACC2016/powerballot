Hawaii Power Ballot
===================

Hawaii Power Ballot is a project to provide a version of a ballot where you can click on the candidate to get more information about that candidate.

Screenshot of power ballot info
-------------------------------
![Screenshot of a candidate](http://codeforhawaii.github.io/hawaii-power-ballot/images/screenshot1.png "Screenshot of a candidate")

Details
-------
Get started by viewing the [interactive map](http://civic-celerator.maps.arcgis.com/apps/OnePane/basicviewer/index.html?appid=eabd4dbf3fcb48468cd92587b2d8729c). In the map you click on your house (you can input your address in the "find address" search box in the upper right). Then if you address already has a power ballot you will see power ballot as one of the options in the pop-up (currently only the districts 18-01, 18-02, 18-03, 18-04 exist, which is why we need volunteers!).

Example power ballot pages:
* 18-01: http://codeforhawaii.github.io/hawaii-power-ballot/dp18-01.htm

How to contribute
-----------------

Want to help? Common Cause Hawaii is seeking volunteers to help gather additional candidate information. If you can help, please Email Civic-Celerator (<civiccelerator@gmail.com>) and specify that you want to help with the Hawaii Power Ballot Initiative. You will be asked to fill out basic information about each candidate, such as:
* Basic description
* Campaign website
* Social Media: Twitter, Facebook, Google+
* [FollowTheMoney.com](http://FollowTheMoney.com) links
* Other interesting/informative links about the candidate

To volunteer for data entry email <civiccelerator@gmail.com>!

Development
-----------

See Development.md

Contribute with Code
--------------------

To help with development take a look at the issues and talk to @rajhawaii or @axelson. The group communication will happen via the [Code for Hawaii Google+ group](https://plus.google.com/communities/116866725555175272325).

Potential issues to fix/address:
* Filter options
** Probably radio buttons to filter by party and office
* Bring in Twitter/Facebook/LinkedIn Icons?
* Add a loading animation while the candidate info loads (or preload all candidates when the page loads)

24 July - Updated the data service, now "powerballot_test4".
--------------------
* Here's the link: http://services2.arcgis.com/tuFQUQg1xd48W6M5/arcgis/rest/services/powerballot_test4/FeatureServer/2

26 July - Final service with all Common Cause Hawaii data now published:
--------------------
* Here's the link: http://services2.arcgis.com/tuFQUQg1xd48W6M5/arcgis/rest/services/HI_2014_primary_candidates/FeatureServer/1
* Missing links now show up as "Twitter - Unknown"
* 11:30 pm: Updated service to fix okina problem with Python, some names used ' for okina, replaced in data with `
*           Affects name_party, ballot_name, cc_name and cc_treasurer
27 July - Debugging Python scripts to generate DP pages:
--------------------
* Problem with OE_Council attribute for Big Island in precincts service - fixed
     - does not affect candidate pages

29 July - Federal candidates
--------------------
* Problem with candidates for Federal office - they should not have State Candidate Committee information, only FEC information.  So in the powerballot service:
	- I've blanked out (set to "") all of the links to State Campaign Spending for all 25 Federal candidates, so the candidate committee report and the standard and special campaign spending reports.
	- I've blanked out (set to "") committee name, chair and treasurer for all 25 Federal candidates
	- I've set committee name and treasurer based on FEC records for 2014, could not find info on chair so all remain blank
	- I've added a new attribute "FEC_CC_ID" that contains the FEC ID for the candidate committee, we already have "FEC_Cand_ID" which is the FEC candidate ID
	- note: 10 of the 25 Federal candidates do not have an FEC ID.
* Suggest we change candidate popup "Bio and Candidate Committee" section for Federal candidates (OE_SORT_ID < 500) to:
	Name:
	Treasurer:
	FEC Candidate ID: (I can't figure out how to construct a unique URL, so just the ID as text)
	FEC Committee ID: (I can't figure out how to construct a unique URL, so just the ID as text)
