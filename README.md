# Evaluation
Evaluation. test
Description of project


React native app that does the following:

Screen 1:

Ask user for their name and navigates them to a new screen. And says something like welcome <Name> in new screen

Screen2:

When user lands to the new screen, you will do a post to the following api endpoint:
https://us-central1-oceanfriends-71bae.cloudfunctions.net/getAccessProfiles
With this data:
{
   "data":
   {"userId": "sr4Z21Tqg0VupvjEDq5Bg51gosg2"}
}

You will get response which will contain list of profiles. Each profile will have a profileId. Show some information from the profile and let user select a profile using some control. Once user selects that profile, you will call another api with selected profile’s profileid. Call endpoint will be (post again): 
https://us-central1-oceanfriends-71bae.cloudfunctions.net/get2daysmeal
With data:
{"data":{
       "profileId": "f777df7f-4810-4968-972c-7976051ec697"
   }}

You will get list of meals profile has consumed in last couple of days  and you job is to pick some fields from each meal and display in UI in a pleasing way. Adding animation to make the screens more engaging is a big plus.




