# MyNBG

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Project Specific Information

myNBG Wrapper Architecture
==========================

myNBG
-----

Πρόκειται για το εξωτερικό κέλυφος (wrapper) της υλοποίησης που θα περιλαμβάνει
τα στατικά assets (δηλαδή όλα τα αρχεία scss, εικόνες, γραμματοσειρές κτλ) και
την διασύνδεση με τον STS. Επιπρόσθετα θα περιλαμβάνει λειτουργικότητες που
είναι κοινές σε όλα τα μέρη του MyNBG, όπως το header, το footer και το κεντρικό
μενού στα αριστερά της οθόνης, ενώ ταυτόχρονα θα διεκπεραιώνει και την
επικοινωνία (routing / reusability) μεταξύ των μικρο-εφαρμογών.

Micro-apps
----------

Πρόκειται για τα επιμέρους τμήματα (modules) της εφαρμογής (Αναζήτηση Πελάτη,
Βασική Σχέση, Θέση πελάτη, Internet Banking κτλ.). Tα micro-apps
(searchcustomer, customerposition κτλ) καλούνται με lazy-load ως routes στο
myNBG και χρησιμοποιούν NgRx state management, ενώ η ανάπτυξή του γίνεται είτε
ανεξάρτητα του wrapper, είτε σε συνδυασμό με αυτόν.

Πρόσθετα, υπάρχει μια ακόμη μικρο-εφαρμογή (common-lib) που περιλαβάνει όλα τα
shared components και οποιοδήποτε custom library αναπτυχθεί για τις ανάγκες του
έργου.

Ένα απλοποιημένο διάγραμμα της δομής του έργου παρουσιάζεται παρακάτω:

![](media/0f690ffac24d30a001cb47c5e18c8616.png)

Όπως περιγράφεται στο παραπάνω διάγραμμα, όλες οι μικρο-εφαρμογές βρίσκονται στο
στο φάκελο projects του myNBG wrapper.

O wrapper είναι υπεύθυνος για τα παρακάτω:

1.  επικοινωνία των microapps

2.  διαμοιρασμό του angular core

3.  Shared components

4.  κλήση των services που χρησιμοποιούνται από όλες τις μικροεφαρμογές

5.  διαμοιρασμό των στατικών αρχείων

6.  typescript configuration

7.  dependency injection

8.  task management

Επικοινωνία MicroApps
---------------------

Η επικοινωνία του wrapper με τα micro-apps και το common lib υλοποιείται με
angular routing, ώστε να λειτουργούν ως lazy-loaded modules του myNBG router.

Διαμοιρασμός Angular Core
-------------------------

To wrapper application είναι υπεύθυνο για τη διαχείριση του core της Angular 8
καθώς και όλων των node module που απαιτούνται από την εφαρμογή. Όταν εκτελείται
καθένα από τα microapps, ο wrapper γνωρίζει που «βρίσκονται» τα components κα
πως καλούνται και τους «διαθέτει» το angular core προκειμένου να εκτελεστούν.
Επίσης κάθε npm \<command\> εκτελείται στο root του wrapper.

Shared Components
-----------------

Στο wrapper περιλαμβάνονται και όλα τα στοιχεία της εφαρμογής που
χρησιμοποιούνται από όλα τα microapps. Αυτά είναι:

1.  **Header Component:** Πρόκειται για την κεφαλίδα της εφαρμογής η οποία
    «κληρονομείται» στη Θέση Πελάτη από το wrapper.

    ![](media/3583220fb919debc93d9d019de241820.png)

2.  **Navigation Component:** Πρόκειται για τη βασική πλοήγηση της εφαρμογής και
    «κληρονομείται» στη Θέση Πελάτη από το wrapper.

![](media/f4f59b60b7439624da02aeb998f1aa2e.png)

1.  **Footer Component:** Πρόκειται για το υποσέλιδο της εφαρμογής το οποίο
    «κληρονομείται» στη Θέση Πελάτη από το wrapper.

![](media/ad7f002d3fb257fa9670d9cf3f1ef2ce.png)

1.  **Breadcrumb Component:** Πρόκειται για το navigation path που βρίσκεται
    κάτω από το header component και εμφανίζεται στις εσωτερικές σελίδες της
    εφαρμογής, εκτός της Αναζήτησης Πελάτη.

    ![](media/e2a6cd657bd1eeb83d02090f3c3d6fdb.png)

Service Calls
-------------

Στο wrapper γίνονται όλες οι κλήσεις στο ΑΡΙ που απαιτούνται από την εφαρμογή.
Ενδεικτικά αναφέρονται:

### apiCRA

-   apiCra/base/GetReleaseNotes

-   apiCra/customer/IsContactCenterUser

-   apiCra/customer/isMyNBGAdmin

-   apiCra/customer/canViewNextBestOffer

-   apiCra/customer/canEditNextBestOffer

-   apiCra/Base/getcities

-   apiCra/Base/getcountries

-   apiCra/position/getaccountssimple

-   apiCra/profile/get

-   apiCra/account/getbycustomer

-   apiCra/loyalty/Discovery

-   apiCra/confirmationDocuments/getWarningAlerts

-   apiCra/basicinfo/getfpbasic

-   apiCra/Profile/getwarnings

-   apiba/BancAssurancePerson/LoadPersonContracts

-   apiCra/address/getaddresses

-   apiCra/contact/get

-   apiCra/Customer/GetCustomerRMDetails

### apiinternetBanking

-   apiinternetBanking /userib/getuser

### apiCards

-   apiCards /Logs/canViewLoggingsReport

### Διαμοιρασμός των στατικών αρχείων

Στο wrapper υπάρχει φάκελος assets ο οποίος περιλαμβάνει όλα τα στατικά αρχεία
(εικόνες, γραμματοσειρές κτλ.) που απαιτούνται για ολόκληρη την εφαρμογή myNBG.
Στον ίδιο φάκελο επίσης υπάρχουν και τα απαιτούμενα scss αρχεία για το styling
της εφαρμογής. Φάκελος assets υπάρχει και μέσα σε καθένα από τα microapps o
οποίος θα πρέπει να περιλαμβάνει αποκλειστικά τα overrides που απαιτούνται για
την κάθε μικρο-εφαρμογή.

Typescript configuration
------------------------

Στο wrapper βρίσκονται όλες οι ρυθμίσεις που απαιτούνται για το transpilation
της typescript σε javascript. Υπάρχουν 2 αρχεία:

*Tsconfig.json*

![](media/c4e289e00c65b32d522f9e56dc04c84f.png)

To αρχείο αυτό είναι υπεύθυνο για το wrapper, το common lib και το συνολικό
configuration της ts.

*Tsconfig.app.json*

![](media/79b8d080a6b5fd0a17a593c7817a8533.png)

To αρχείο αυτό κάνει extend το tsconfig.json και είναι υπέυθυνο για τα
microapps. Για κάθε νέο module της εφαρμογής που δημιουργείται πρέπει να
δηλώνεται στο αρχείο αυτό που βρίσκονται τα ts αρχεία για κάθε μικροεφαρμογή.

Dependency injection
--------------------

Όλες οι εξαρτήσεις της εφαρμογής δηλώνονται στο αρχείο package.json, το οποίο
υπάρχει αποκλειστικά στο wrapper της εφαρμογής. Κανένα από τα microapps ή το
common lib δεν περιλαμβάνει αρχείο package.json, γιατί οι εξαρτήσεις
διαχειρίζονται κεντρικά από την εφαρμογή για τους παρακάτω λόγους:

1.  Code consistency: η εφαρμογή ακολουθεί τα κατά τη βιβλιογραφία best
    practices σχετικά με την αρχιτεκτονική των microservices στο frontend. Για
    το λόγο αυτό πρέπει ο κώδικας τόσο στις επιμέρους εφαρμογές όσο και στο
    wrapper να τηρούνται τα best practices

2.  Dependency Sharing: το angular core, τα node modules κτλ. υπάρχουν μόνο στο
    wrapper ο οποίος τα διαθέτει σε όποια εφαρμογή τα χρειαστεί

![](media/3196b42af95d4274484f90ea35863e4d.png)

1.  Οτιδήποτε χρειάζεται να προστεθεί ως εξάρτηση σε οποιοδήποτε μέρος της
    εφαρμογής προστίθεται σε αυτό το αρχείο και διαμοιράζεται από το wrapper.

Task Management 
----------------

H διαχείριση των task της εφαρμογής, δηλαδή η εκτέλεση των εντολών ng build / ng
serve, η εκτέλεση των unit test, η δημιουργία νέων microapps ή νέων components
πρέπει να εκτελείται πάντα στο επίπεδο του wrapper. H περιγραφή και η δήλωση
αυτών των ενεργειών γίνεται στο αρχείο angular.json. Ενδεικτικές εντολές είναι:

npm run start:myNBG -\> Εκτέλεση wrapper σε dev mode

npm run start:appN -\> Εκτέλεση microapp σε dev mode

npm run build:myNBG -\> Εκτέλεση wrapper σε prod mode

npm run build:appN -\> Εκτέλεση microapp σε prod mode

npm run test:myNBG -\> Εκτέλεση test στον wrapper

npm run test: appN -\> Εκτέλεση test σε microapp

ng g application \<name\> -\> Δημιουργία νέου microapp

ng g component \<name\> --project=appN -\> Δημιουργία νέου component μέσα σε
microapp

