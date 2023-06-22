// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// Factory function to create a contact object
function makeContact(id, nameFirst, nameLast) {
    return {
      id: id,
      nameFirst: nameFirst,
      nameLast: nameLast
    };
  }
  
  // Factory function to create a contact list object
  function makeContactList() {
    var contacts = [];
  
    return {
      length: function() {
        return contacts.length;
      },
      
      
      addContact: function(contact) {
        contacts.push(contact);
      },
      
    
      
      findContact: function(fullName) {
        var foundContact = contacts.find(function(contact) {
          return contact.nameFirst + ' ' + contact.nameLast === fullName;
        });
        return foundContact;
      },
      
      
      
      
      
      removeContact: function(contact) {
        var index = contacts.indexOf(contact);
        if (index !== -1) {
          contacts.splice(index, 1);
        }
      },
      
      
      
      
      
      
      printAllContactNames: function() {
        var names = contacts.map(function(contact) {
          return contact.nameFirst + ' ' + contact.nameLast;
        });
        return names.join('\n');
      }
    };
  }
  
  
  
  
  



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
