import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
* Da lang terms
* @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangDaBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangDaBehavior = {
	daDk: {
		'addCriteriaGroup': 'Tilføj kriteriegruppe',
		'addCriterion': 'Tilføj kriterium',
		'addFeedback': 'Tilføj feedback',
		'addLevel': 'Tilføj niveau',
		'addLevelPrepend': 'Tilføj nyt niveau før {name}',
		'addLevelAppend': 'Tilføj nyt niveau efter {name}',
		'addOverallLevelAppend': 'Tilføj nyt overordnet niveau efter {name}',
		'addOverallLevelPrepend': 'Tilføj nyt overordnet niveau før {name}',
		'cellPoints': 'Cellepunkter for kriterium',
		'changeScoringSuccessful': 'Scoremetode ændret til {method}',
		'clearOverride': 'Ryd tilsidesættelse',
		'clearFeedback': 'Ryd feedback',
		'criterionAdded': 'Et nyt kriterium blev tilføjet',
		'criterionAriaLabel': 'Kriterium {index, number} af {count, number}',
		'criterionDeleted': '{name} kriterium blev slettet',
		'criterionDescriptionAriaLabel': 'Beskrivelse af kriterium {criterionName}, niveau {levelName}',
		'criterionFeedback': 'Feedback for kriterium',
		'criterionFeedbackAriaLabel': 'Feedback på kriterium {criterionName}, niveau {levelName}',
		'criterionNameAriaLabel': 'Kriterienavn',
		'criterionOutOf': 'Kriterium {name} er ud af {value} point',
		'criterionPlaceholder': 'Klik for at redigere kriterium',
		'dashOutOf': '— / {outOf}',
		'description': 'Beskrivelse',
		'descriptionInfo': 'Tilføj en beskrivelse til egen reference. Den vil ikke blive delt med elever',
		'descriptionSaveFailed': 'Det lykkedes ikke at gemme beskrivelsen',
		'editFeedback': 'Rediger feedback',
		'errorText': 'Hovsa! Vi har problemer med at oprette forbindelse. Du kan prøve at opdatere siden eller prøve igen senere.',
		'feedback': 'Feedback',
		'feedbackSaveFailed': 'Det lykkedes ikke at gemme feedbacken',
		'groupAdded': 'En ny kriteriegruppe blev tilføjet',
		'groupName': 'Kriteriegruppenavn',
		'groupRegion': 'Kriteriegruppe {name}',
		'helpAssociations': 'Hvad er tilknytninger?',
		'hideScore': 'Skjul scorer for elever',
		'hideScoreHeader': 'Synlighed af score',
		'levelAchieved': 'Opnået niveau: ',
		'levelAppended': 'Et nyt niveau blev tilføjet efter {name}',
		'levelDeleted': '{name} niveau slettet',
		'levelName': 'Niveaunavn',
		'levelNameAndBulletPoint': '{levelName} \u2022',
		'numberAndPoints': '{number} {number, plural, one {point} other {points}}',
		'numberAndPercentage': '{number} %',
		'levelPoints': 'Niveaupunkter',
		'levelPrepended': 'Et nyt niveau blev tilføjet før {name}',
		'lockedAlertText': 'Denne rubrik kan ikke redigeres, da den allerede er blevet brugt til at vurdere elevens arbejde',
		'name': 'Navn',
		'nameIsRequired': 'Navn påkrævet',
		'nameSaveFailed': 'Det lykkedes ikke at gemme navnet',
		'options': 'Indstillinger',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': 'Generel beskrivelse af niveau {levelName}',
		'overallFeedback': 'Samlet feedback',
		'overallFeedbackAriaLabel': 'Samlet feedback for niveau {levelName}',
		'overallLevelDeleted': '{name} overordnet niveau slettet',
		'overallLevelName': 'Navn på overordnet niveau',
		'overallScoreDescription': 'Hver aflevering får tildelt et præstationsniveau på baggrund af dens samlede rubrikscore.',
		'overallScoreHeader': 'Samlet score',
		'overallScore': 'Samlet score',
		'overrideLabel': 'Override',
		'overriddenScoreTip': 'Kriteriescore er blevet tilsidesat',
		'overriddenTotalScoreTip': 'Den samlede rubrikscore er blevet tilsidesat. Scoren opdateres ikke længere afhængigt af ændringer i rubrikken.',
		'points': '{number} {number, plural, one {point} other {point}}',
		'pointsAbbreviation': 'pt',
		'pointsAreRequired': 'Pointværdi påkrævet',
		'pointsMinimum': 'Mindst {number} {number, plural, one {point} other {point}}',
		'pointsSaveFailed': 'Det lykkedes ikke at gemme point',
		'percentage': '\{number\} %',
		'preview': 'Forhåndsvisning',
		'initialFeedback': 'Første feedback',
		'refreshText': 'opdater siden',
		'removeCriterion': 'Fjern kriterium {name}',
		'removeLevel': 'Fjern niveau {name}',
		'removeOverallLevel': 'Tilføj overordnet niveau {name}',
		'reverseLevelOrder': 'Omvendt niveaurækkefølge',
		'reverseLevelsSuccessful': 'Niveaurækkefølgen blev vendt om',
		'rubricLoadingErrorAriaAlert': 'Der opstod et problem med indlæsning af din rubrik. Den kan ikke vises.',
		'rubricLoadingErrorMessage': 'Vi kunne desværre ikke vise rubrikken.',
		'rubricSavingErrorAriaAlert': 'Der opstod et problem med at gemme din rubrik.',
		'rubricSavingErrorMessage': 'Noget gik galt. Kontrollér din rubrik.',
		'rubricSummaryA11y': 'Denne tabel viser kriterier og kriteriegruppenavne i den første kolonne. Den første række viser niveaunavne og omfatter scorer, hvis rubrikken anvender en numerisk scoremetode.',
		'rubricVisibility': 'Rubriksynlighed',
		'rubricVisibilityAlways': 'Rubrikken er synlig for elever',
		'rubricVisibilityOnceFeedbackPosted': 'Rubrikken er skjult for elever indtil feedback er offentliggjort',
		'rubricVisibilityNever': 'Rubrikken er skjult for elever',
		'rubricVisibilitySaveFailed': 'Det lykkedes ikke af ændre rubrikkens synlighed.',
		'scoreOutOf': '{score} / {outOf}',
		'scoring': 'Score: {method}',
		'selectNextLevel': 'Select Next Level',
		'selectPreviousLevel': 'Select Previous Level',
		'setScoreVisibilityFailed': 'Det lykkedes ikke at indstille scorens synlighed.',
		'scoresVisibilityHidden': 'Scorer er skjult for elever',
		'scoresVisibilityVisible': 'Scorer er synlig for elever',
		'statistics': 'Statistik',
		'total': 'Samlet',
		'totalScoreAriaLabel': 'Rubrikken er ud fra en samlet score på {value} point.',
		'moveCriterionUp': 'Flyt kriterium {position} op',
		'moveCriterionDown': 'Flyt kriterium {position} ned',
		'criterionMoved': '{name} er nu kriterium {position}',
		'rangeStartOrMore': 'eller mere',
		'overallLevelRangeStart': 'Startområde for overordnet niveau',
		'rangeStartRequired': 'Startområdeværdi påkrævet',
		'rangeStartInvalid': 'Startområdeværdi er ugyldig',
		'closeDialog': 'Luk',
		'deleteConfirmationYes': 'Slet',
		'deleteConfirmationNo': 'Annuller',
		'deleteLevelConfirmationTitle': 'Skal dette niveau slettes?',
		'deleteLevelConfirmationText': 'Denne handling sletter niveauet og dens indhold permanent.',
		'deleteCriterionConfirmationTitle': 'Skal dette kriterium slettes?',
		'deleteCriterionConfirmationText': 'Denne handling sletter dette kriterium og dets indhold permanent.',
		'rubricType': 'Type: {rubricType}',
		'changeRubricTypeSuccessful': 'Rubriktype ændret til {rubricType}',
		'changeConfirmationYes': 'Fortsæt',
		'changeConfirmationNo': 'Annuller',
		'changeRubricTypeWarnTitle': 'Skal rubriktypen ændres?',
		'changeRubricTypeWarnMessage': 'Ændring af rubrikken fra analytisk til holistisk kan resultere i datatab.',
		'rubricStatus': 'Status: {status}',
		'changeRubricStatusSuccessful': 'Rubrikstatus ændret til {status}',
		'editRubric': 'Rediger rubrik',
		'advancedAvailabilityHeader': 'Avanceret tilgængelighed',
		'newAssociationLabel': 'Tillad nye tilknytninger i',
		'associationsSaveFailed': 'Det lykkedes ikke at gemme tilknytninger',
		'descriptionReadOnlyMode': 'Beskrivelse (ikke synlig for elever)',
		'descriptionReadOnlyPlaceholder': 'Ingen beskrivelse',
		'groupNameSaveFailed': 'Det lykkedes ikke at gemme kriteriegruppenavn'
	}
};
