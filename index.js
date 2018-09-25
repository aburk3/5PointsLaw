let initialDiscKeys = ['draft initial disclosures', 'draft initial', 'initial', 'disclosures', 'document', 'initial disclosures', 'disclosure', 'initial disclosure', 'draft initial disclosure']
let initialDiscSteps = ['Search Complaint for what type of case it is and Create that Document in the Smokeball task (ADA, Title VII, etc.).', 'Open Answer Document', 'Add witnesses (or any names) to the right side bar from the Complaint and Answer documents to the Initial Disclosure document.', 'If there is more than one type (Title VII AND FLSA), add the paragraph from the second type to the first.']

let rule26Keys = ['26', 'rule 26', 'rule 26 report', 'draft rule 26 report', 'draft rule 26', 'rule26', 'rule twenty', 'draft rule26', 'rppm', 'rules party planning meeting', 'rules party', 'rules party planning', '26 rule']
let rule26Steps = ['Link to task to Doc RPPM (Check Clients District)', 'Find RPPM in the correct district and CREATE it in the task', 'Insert Defence Council where "_________, representing the Defendant" is.', 'Type in Defence council at the bottom of the page, along with address, company, tele, facs, and email addresses.']

let rule15Keys = ['15', 'draft rule 15', 'draft rule 15 motion', 'rule 15', 'rule 15 motion', 'motion to amend', 'amended complaint', 'rule15', '15 motion', 'motion to amend complaint', 'amend complaint']
let rule15Steps = ['Draft a Rule 15 motion when the Defendant has been improperly named', 'If they have been improperly named, it will be located in the Answer doc on the first or second page (usually at the bottom)', 'Go to the original filed Complaint.word and click on "Replace" at the top right of the Home tab', 'Type the original, correct name inside of the "Find What" field, and the correct Defendant name in the "Replace with" field.', 'Next, click "Replace All."', 'Make sure to add the Defense Council to the Rule 15 Form.', 'Create a task in Smokeball for Attorney to review the Rule 15 and the Amended Complaint.', 'The Rule 15 MUST be filed first, and then the actual Amended and Restated Complaint may be filed.']
let caseDevKeys = ['case', 'case memo', 'case development', 'case development memo', 'memo','development', 'case dev', 'case devel', 'draft case', 'draft case development memo', 'draft case development', 'draft case dev', 'draft memo', 'dev']
let caseDevSteps = ['Create the document listed in the Smokeball task.', 'Open the Answer document', 'Convert the Answer to a Word document and save it in the client\'s file.', 'Open the Complaint', 'Go through the Complaint and see what Counts there are and make the numbering the same in the Memo that you just created.', 'Delete all Counts that are not found in the Complaint except for \'Damages\' and \'Affirmative Defenses\'.', 'Copy and paste \'Additional and Affirmative Defenses\' from the Answer Word Doc into the Case Development Word Document under the \'Affirmative Defenses\' section.', 'Correct all numbering and format correctly.']
let confServiceKeys = ['is perfected', 'perfected ', 'service is ', 'confirm', 'confirm service', 'service', 'service is', 'service is perfected', 'perfected service', 'confirm service is', 'confirm service is perfected', 'perfected', 'confirm perfected']
let confServiceSteps = ['Check File Explorer - if a "Motion for Extension of Time to File..." is there, then the service has been perfected (OR if there is an Answer)', 'If Summons Issued doc is there, check stamps.com to see if it was delivered (the last page of the Complaint should have the address for the Defendant\'s council).', 'If Motion to dismiss is there, the the service HAS been perfected.', 'NOTE: If in Southern District, print off the Summons and fill out the back page along with the "date of."']
let discPacketKeys = ['discovery pack', 'draft discovery pack', 'create draft discovery packet', 'draft discovery packet', 'create discovery', 'create discovery packet', 'draft discovery', 'draft discovery packet', 'draft packet', 'discovery packet', 'discovery', 'discovery draft', 'create draft', 'create draft discovery', 'packet']
let discPacketSteps = ['Open Complaint.', 'Find out the type of Complaint and create that type in the task window.', 'Open EEOC charge (found in doc 1-1, 1-2, etc.).', 'Input the dates requested (date of discriminatory charge is LATEST date, unless the "latest" field is empty; "Date lawsuit is filed" is located in BLUE at the top of the page).', 'Correct gender of client (should be highlighted in Word Doc).', 'Add Defendant\'s Attorney(s) from the most recent Answer to the certificate of service.', 'Replace bracketed information with the correct type of case (e.g. 42 U.S.C. sec. 1981, FMLA, etc.)']
let confDefNameKeys = ['confirm', 'confirm defendant', 'confirm defendant is properly named', 'confirm defendant properly named', 'properly named', 'named properly', 'properly named defendant', 'confirm defendant is', 'confirmed defendant', 'defendant is properly']
let confDefNameSteps = ['Check the Answer document to confirm that the Defendant has been properly named. The first or second page will till you if the defendant was improperly named.', 'If improperly named, it can usually be found at the bottom of the first page with as a footnote.', 'If Defendant was not properly named, a Rule 15 (Motion to Amend Complaint) will need to be drafted']
let certifiedMailKeys = ['certified mail', 'certified', 'send certified', 'send certified mail', 'certified mailing', 'certified mailing label', 'preparing certified mail', 'preparing certified', 'green certified mail', 'mailing certified', 'mail label', 'mail', 'certified mailing labels']
let certifiedMailSteps = ['The green certified mailing label is located in the printer room drawer', 'Choose "Packages" in Stamps.com.', 'Next to "Printing on:" choose the form at the bottom "Certified Mail Form - SDC-3930"', 'Type in the courts address for the return address: (see "Service Packet" Page on left for addresses and formatting)', 'Next to Return Receipt choose "Physical Receipt" for the Tracking type', 'Make sure to weigh out the envelope and service packet and enter weight before printing.', 'Remove both the bar code and return address, fold and tear at perforation.', 'Turn label over and place barcode in white space labeled appropriately.', 'Look at top of the filed complaint and write in the case number on the mailing label under the address on the left and right side.']
let answerKeys = ['answer', 'defendant\'s answer', 'answer document', 'answers', 'answer steps', 'answer ', 'answer received']
let answerSteps = ['Highlight incorrect names OR write (in pencil) "name appears correct"', 'Incorrect naming is usually found on the first or second page ("Plaintiff is incorrectly named")', 'Enter Defendant\'s attorneys into Smokeball (Defense can be found at the end of the Answer)']

let districtKey = ['districts', 'northern', 'southern', 'middle', 'northern district', 'middle district', 'southern district', 'district', 'dist', 'distr']
let districtKeyValues = [{district: 'Northern District', link: 'https://ecf.alnd.uscourts.gov/cgi-bin/ShowIndex.pl'}, {district: 'Middle District', link: 'https://ecf.almd.uscourts.gov/cgi-bin/login.pl'}, {district: 'Southern District', link: 'https://ecf.alsd.uscourts.gov/cgi-bin/ShowIndex.pl'}]

let rulesKey = ['rule', 'rule motion', 'rules', 'draft rule', 'draft rules']
let rulesValues = ['Rule 15', 'Rule 26', '** Type in either Rule to find out about it!']

let input = document.getElementById('userSearch')
var container = document.getElementById('friends')
container.id = 'myContainerId'

// adds event listener to button to submit when enter is clicked
document.getElementById('userSearch')
  .addEventListener('keyup', function (event) {
    event.preventDefault()
    if (event.keyCode === 13) {
      document.getElementById('buttonWasClicked').click()
    }
  })

  let documents = {
    initial: {
      keys: initialDiscKeys,
      steps: initialDiscSteps,
      title: 'Draft Initial Disclosures',
    },
    rule26: {
      keys: rule26Keys,
      steps: rule26Steps,
      title: 'Draft Rule 26',
    },
    rule15: {
      keys: rule15Keys,
      steps: rule15Steps,
      title: 'Draft Rule 15',
    },
    caseDev: {
      keys: caseDevKeys,
      steps: caseDevSteps,
      title: 'Case Development Memo',
    },
    confirmService: {
      keys: confServiceKeys,
      steps: confServiceSteps,
      title: 'Confirm Service is Perfected',
    },
    discoveryPacket: {
      keys: discPacketKeys,
      steps: discPacketSteps,
      title: 'Draft Discovery Packet',
    },
    rulesList: {
      keys: rulesKey,
      steps: rulesValues,
      title: 'Types of Rules:',
    },
    confirmDefendant: {
      keys: confDefNameKeys,
      steps: confDefNameSteps,
      title: 'Confirm Defendant is Properly Named',
    },
    certifiedMailing: {
      keys: certifiedMailKeys,
      steps: certifiedMailSteps,
      title: 'Preparing a Certified Mailing Label',
    },
    answerReceived: {
      keys: answerKeys,
      steps: answerSteps,
      title: 'Steps when Answer is received'
    }
  }

function checkForItem () {
  let myItem = input.value
  let lowerCase = myItem.toLowerCase()
  lowerCase = lowerCase.trim()
  input.value = ''
  document.getElementById('myContainerId').innerHTML = ''

var value = false
  for (documentRef in documents) {
    for (let i = 0; i < documents[documentRef]['keys'].length; i++) {
      if (lowerCase === documents[documentRef]['keys'][i]) {
          document.getElementById('topicHeading').innerHTML = ''
        // console.log(documents[documentRef]['keys'][i])
        // console.log(documents[documentRef]['steps'])
        // console.log(documents[documentRef]['title'])
        runItAll(documents[documentRef]['steps'], documents[documentRef]['title'])
        value = true
        console.log(value)
      }
    }
  }

  if (value === false) {
    console.log(value)
    document.getElementById('topicHeading').innerHTML = ''
    var message = document.createTextNode('I\'m sorry. No information was found.')
    container.className = 'list'
    container.appendChild(message)
 }
}

// Creating categories
function setLinks (passedKeys, passedTitle) {
  var myList = document.createElement('ul')
  myList.className = 'list'
  document.getElementById('topicHeading').innerHTML = passedTitle
  // iterate through the array
  for (var i = 0; i < passedKeys.length; i++) {
    // create list item for every element
    var listItem = document.createElement('li')

    // create a text node to store value
    var listValue = document.createTextNode(passedKeys[i])
    listValue.id = 'myListValueId'
    // append the value in the list item
    listItem.appendChild(listValue)

    // append the list item in the list
    myList.appendChild(listItem)
    myList.id = 'myListId'
  }
  container.appendChild(myList)
}


function runItAll (passedArray, passedTitle) {
  var myList = document.createElement('ol')
  myList.className = 'list'

  document.getElementById('topicHeading').innerHTML = passedTitle
  // iterate through the array
  for (var i = 0; i < passedArray.length; i++) {
    // create list item for every element
    var listItem = document.createElement('li')

    // create a text node to store value
    var listValue = document.createTextNode(passedArray[i])
    listValue.id = 'myListValueId'
    // append the value in the list item
    listItem.appendChild(listValue)

    // append the list item in the list
    myList.appendChild(listItem)
    myList.id = 'myListId'
  }
  container.appendChild(myList)
}

input.focus()
