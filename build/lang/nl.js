import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
 * Nl lang terms
 * @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangNlBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangNlBehavior = {
	nl: {
		'addCriteriaGroup': 'Criteriagroep toevoegen',
		'addCriterion': 'Criterium toevoegen',
		'addFeedback': 'Feedback toevoegen',
		'addLevel': 'Niveau toevoegen',
		'addLevelAppend': 'Nieuw niveau toevoegen na {name}',
		'addLevelPrepend': 'Nieuw niveau toevoegen voor {name}',
		'addOverallLevelAppend': 'Nieuw algemeen niveau toevoegen na {name}',
		'addOverallLevelPrepend': 'Nieuw algemeen niveau toevoegen voor {name}',
		'advancedAvailabilityHeader': 'Geavanceerde beschikbaarheid',
		'associationsSaveFailed': 'Opslaan van koppelingen mislukt',
		'cellPoints': 'Criterium-celpunten',
		'changeConfirmationNo': 'Annuleren',
		'changeConfirmationYes': 'Doorgaan',
		'changeRubricStatusSuccessful': 'Rubricstatus veranderd in {status}',
		'changeRubricTypeSuccessful': 'Rubrictype veranderd in {rubricType}',
		'changeRubricTypeWarnMessage': 'Het veranderen van uw rubric van analytisch naar holistisch kan resulteren in gegevensverlies.',
		'changeRubricTypeWarnTitle': 'Rubrictype veranderen?',
		'changeScoringSuccessful': 'Scoringsmethode is gewijzigd in {method}',
		'clearFeedback': 'Feedback wissen',
		'clearOverride': 'Overschrijven wissen',
		'closeDialog': 'Sluiten',
		'criterionAdded': 'Er is een nieuw criterium toegevoegd',
		'criterionAriaLabel': 'Criterium {index, number} van {count, number}',
		'criterionDeleted': 'Criterium {name} is verwijderd',
		'criterionDescriptionAriaLabel': 'Beschrijving voor criterium {criterionName}, niveau {levelName}',
		'criterionFeedback': 'Criterium feedback',
		'criterionFeedbackAriaLabel': 'Feedback voor criterium {criterionName}, niveau {levelName}',
		'criterionMoved': '{name} is nu criterium {position}',
		'criterionNameAriaLabel': 'Criteriumnaam',
		'criterionOutOf': 'Criterium {name} is gebaseerd op {value} punten',
		'criterionPlaceholder': 'Klik om het criterium te bewerken',
		'dashOutOf': '— / {outOf}',
		'deleteConfirmationNo': 'Annuleren',
		'deleteConfirmationYes': 'Verwijderen',
		'deleteCriterionConfirmationText': 'Hierdoor wordt het criterium en de inhoud permanent verwijderd.',
		'deleteCriterionConfirmationTitle': 'Dit criterium verwijderen?',
		'deleteLevelConfirmationText': 'Hierdoor wordt het niveau en de inhoud permanent gewist.',
		'deleteLevelConfirmationTitle': 'Dit niveau verwijderen?',
		'description': 'Beschrijving',
		'descriptionInfo': 'Voeg een beschrijving toe voor uw persoonlijke referentie. Deze wordt niet met cursisten gedeeld',
		'descriptionReadOnlyMode': 'Beschrijving (niet zichtbaar voor cursisten)',
		'descriptionReadOnlyPlaceholder': 'Geen beschrijving',
		'descriptionSaveFailed': 'Opslaan van beschrijving mislukt',
		'editFeedback': 'Feedback bewerken',
		'editRubric': 'Rubric bewerken',
		'errorText': 'Oeps! Er zijn problemen met het tot stand brengen van een verbinding. U kunt de pagina vernieuwen of het later opnieuw proberen.',
		'feedback': 'Feedback',
		'feedbackSaveFailed': 'Opslaan van feedback mislukt',
		'groupAdded': 'Een nieuwe criteriagroep is toegevoegd',
		'groupName': 'Naam criteriagroep',
		'groupNameSaveFailed': 'Opslaan van naam criteriagroep mislukt',
		'groupRegion': 'Criteriagroep {name}',
		'helpAssociations': 'Wat zijn koppelingen?',
		'hideScore': 'Scores verbergen voor cursisten',
		'hideScoreHeader': 'Scorezichtbaarheid',
		'initialFeedback': 'Eerste feedback',
		'levelAchieved': 'Behaald niveau:',
		'levelAppended': 'Een nieuw niveau is toegevoegd na {name}',
		'levelDeleted': 'Niveau {name} is verwijderd',
		'levelName': 'Niveaunaam',
		'levelNameAndBulletPoint': '{levelName} \u2022',
		'levelPoints': 'Niveaupunten',
		'levelPrepended': 'Een nieuw niveau is toegevoegd voor {name}',
		'lockedAlertText': 'Deze rubric kan niet worden bewerkt omdat deze al is gebruikt om het werk van de cursist te beoordelen',
		'moveCriterionDown': 'Criterium {position} omlaag verplaatsen',
		'moveCriterionUp': 'Criterium {position} omhoog verplaatsen',
		'name': 'Naam',
		'nameIsRequired': 'Naam vereist',
		'nameSaveFailed': 'Opslaan van naam mislukt',
		'newAssociationLabel': 'Nieuwe koppelingen toestaan in',
		'numberAndPercentage': '{number} %',
		'numberAndPoints': '{number} {number, plural, one {punt} other {punten}}',
		'options': 'Opties',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': 'Algemene beschrijving voor niveau {levelName}',
		'overallFeedback': 'Algemene feedback',
		'overallFeedbackAriaLabel': 'Algemene feedback voor niveau {levelName}',
		'overallLevelDeleted': 'Algemeen niveau {name} verwijderd',
		'overallLevelName': 'Algemene niveaunaam',
		'overallLevelRangeStart': 'Startbereik algemeen niveau',
		'overallScore': 'Algemene score',
		'overallScoreDescription': 'Elk middel wordt een niveau van voltooiing toegewezen op basis van de algemene rubricscore.',
		'overallScoreHeader': 'Algemene score',
		'overriddenScoreTip': 'Criteriumscore is overschreven',
		'overriddenTotalScoreTip': 'De algemene rubricscore is overschreven. De score wordt niet meer bijgewerkt op basis van wijzigingen aan de rubric.',
		'overrideLabel': 'Override',
		'percentage': '{number} %',
		'points': '{number} {number, plural, one {punt} other {punten}}',
		'pointsAbbreviation': 'punt',
		'pointsAreRequired': 'Puntwaarde is vereist',
		'pointsMinimum': '{number} {number, plural, one {punt} other {punten} minimum',
		'pointsSaveFailed': 'Opslaan van punten mislukt',
		'preview': 'Voorbeeldweergave',
		'rangeStartInvalid': 'De startwaarde van het bereik is ongeldig',
		'rangeStartOrMore': 'of meer',
		'rangeStartRequired': 'De startwaarde van het bereik is vereist',
		'refreshText': 'de pagina vernieuwen',
		'removeCriterion': 'Criterium {name} verwijderen',
		'removeLevel': 'Niveau {name} verwijderen',
		'removeOverallLevel': 'Algemeen niveau {name} verwijderen',
		'reverseLevelOrder': 'Niveauvolgorde omkeren',
		'reverseLevelsSuccessful': 'De niveauvolgorde is omgekeerd',
		'rubricLoadingErrorAriaAlert': 'Er is een probleem met het laden van uw rubric. Deze kan niet worden weergegeven.',
		'rubricLoadingErrorMessage': 'We kunnen de rubric niet weergeven.',
		'rubricSavingErrorAriaAlert': 'Er is een probleem met het opslaan van uw rubric.',
		'rubricSavingErrorMessage': 'Er is iets fout gegaan. Controleer uw rubric.',
		'rubricStatus': 'Status: {status}',
		'rubricSummaryA11y': 'In de eerste kolom van deze tabel staan de criteria en de criteriagroepnaam. In de eerste rij staan de niveaunamen en eventueel de scores als de rubric gebruikmaakt van een numerieke scoremethode.',
		'rubricType': 'Type: {rubricType}',
		'rubricVisibility': 'Rubriczichtbaarheid',
		'rubricVisibilityAlways': 'Rubric is zichtbaar voor cursisten',
		'rubricVisibilityNever': 'Rubric wordt verborgen voor cursisten',
		'rubricVisibilityOnceFeedbackPosted': 'Rubric wordt verborgen voor cursisten totdat feedback is gepubliceerd',
		'rubricVisibilitySaveFailed': 'Wijzigen van rubriczichtbaarheid mislukt.',
		'scoreOutOf': '{score} / {outOf}',
		'scoresVisibilityHidden': 'Scores zijn verborgen voor cursisten',
		'scoresVisibilityVisible': 'Scores zijn zichtbaar voor cursisten',
		'scoring': 'Scoremethode: {method}',
		'selectNextLevel': 'Select Next Level',
		'selectPreviousLevel': 'Select Previous Level',
		'setScoreVisibilityFailed': 'Instellen van scorezichtbaarheid mislukt.',
		'statistics': 'Statistieken',
		'total': 'Totaal',
		'totalScoreAriaLabel': 'De rubric is gebaseerd op een totale score van {value} punten.'
	}
};
