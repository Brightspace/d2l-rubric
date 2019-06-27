import '@polymer/polymer/polymer-legacy.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Rubric = window.D2L.PolymerBehaviors.Rubric || {};
window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior = window.D2L.PolymerBehaviors.Rubric.LocalizeBehavior || {};

/*
 * Pt lang terms
 * @polymerBehavior D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangPtBehavior
 */
D2L.PolymerBehaviors.Rubric.LocalizeBehavior.LangPtBehavior = {
	pt: {
		'addCriteriaGroup': 'Adicionar Grupo de critérios',
		'addCriterion': 'Adicionar Critério',
		'addFeedback': 'Adicionar Comentário',
		'addLevel': 'Adicionar Nível',
		'addLevelAppend': 'Adicionar novo nível depois de {name}',
		'addLevelPrepend': 'Adicionar novo nível antes de {name}',
		'addOverallLevelAppend': 'Adicionar novo nível geral depois de {name}',
		'addOverallLevelPrepend': 'Adicionar novo nível geral antes de {name}',
		'advancedAvailabilityHeader': 'Disponibilidade Avançada',
		'associationsSaveFailed': 'Falha ao salvar associações',
		'cellPoints': 'Pontos da célula do critério',
		'changeConfirmationNo': 'Cancelar',
		'changeConfirmationYes': 'Continuar',
		'changeRubricStatusSuccessful': 'Status da rubrica alterado para {status}',
		'changeRubricTypeSuccessful': 'Tipo de rubrica alterado para {rubricType}',
		'changeRubricTypeWarnMessage': 'Alterar sua rubrica de analítica para holística pode resultar em perda de dados.',
		'changeRubricTypeWarnTitle': 'Alterar o tipo de rubrica?',
		'changeScoringSuccessful': 'Método de pontuação alterado para {method}',
		'clearFeedback': 'Limpar Comentário',
		'clearOverride': 'Limpar Substituir',
		'closeDialog': 'Fechar',
		'criterionAdded': 'Um novo critério foi adicionado',
		'criterionAriaLabel': 'Critério {index, number} de {count, number}',
		'criterionDeleted': 'Critério {name} excluído',
		'criterionDescriptionAriaLabel': 'Descrição do critério {criterionName}, nível {levelName}',
		'criterionFeedback': 'Comentário do critério',
		'criterionFeedbackAriaLabel': 'Comentários para o critério {criterionName}, nível {levelName}',
		'criterionMoved': '{name} é agora o critério {position}',
		'criterionNameAriaLabel': 'Nome do critério',
		'criterionOutOf': 'O critério {name} tem pontuação máxima de {value} pontos',
		'criterionPlaceholder': 'Clique para editar o critério',
		'dashOutOf': '— / {outOf}',
		'deleteConfirmationNo': 'Cancelar',
		'deleteConfirmationYes': 'Excluir',
		'deleteCriterionConfirmationText': 'A ação excluirá permanentemente o critério e seu conteúdo.',
		'deleteCriterionConfirmationTitle': 'Excluir este critério?',
		'deleteLevelConfirmationText': 'A ação excluirá permanentemente o nível e seu conteúdo.',
		'deleteLevelConfirmationTitle': 'Excluir este nível?',
		'description': 'Descrição',
		'descriptionInfo': 'Adicione uma descrição para sua referência pessoal. Ela não será compartilhada com os alunos.',
		'descriptionReadOnlyMode': 'Descrição (não está visível para os alunos)',
		'descriptionReadOnlyPlaceholder': 'Sem descrição',
		'descriptionSaveFailed': 'Falha ao salvar descrição',
		'editFeedback': 'Editar Comentários',
		'editRubric': 'Editar Rubrica',
		'errorText': 'Opa! Estamos com problemas para conectá-lo. Recomendamos atualizar a página ou tentar novamente mais tarde.',
		'feedback': 'Comentários',
		'feedbackSaveFailed': 'Falha ao salvar os comentários',
		'groupAdded': 'Um novo grupo de critérios foi adicionado',
		'groupName': 'Nome do grupo de critérios',
		'groupNameSaveFailed': 'Falha ao salvar o nome do grupo de critérios',
		'groupRegion': 'Grupo de critérios {name}',
		'helpAssociations': 'O que são associações?',
		'hideScore': 'Ocultar pontuações de alunos',
		'hideScoreHeader': 'Visibilidade da pontuação',
		'initialFeedback': 'Comentário inicial',
		'levelAchieved': 'Nível alcançado:',
		'levelAppended': 'Um novo nível foi adicionado depois de {name}',
		'levelDeleted': 'Nível {name} excluído',
		'levelName': 'Nome do nível',
		'levelNameAndBulletPoint': '{levelName} \u2022',
		'levelPoints': 'Pontos de nível',
		'levelPrepended': 'Um novo nível foi adicionado antes de {name}',
		'lockedAlertText': 'A rubrica não pode ser editada porque já foi usada para avaliar o trabalho do aluno',
		'moveCriterionDown': 'Mover critério {position} para baixo',
		'moveCriterionUp': 'Mover critério {position} para cima',
		'name': 'Nome',
		'nameIsRequired': 'O nome é obrigatório',
		'nameSaveFailed': 'Falha ao salvar o nome',
		'newAssociationLabel': 'Permitir novas associações em',
		'numberAndPercentage': '{number} %',
		'numberAndPoints': '{number} {number, plural, one {ponto} other {pontos}}',
		'options': 'Opções',
		'outOf': '/ {outOf}',
		'overallDescriptionAriaLabel': 'Descrição geral do nível {levelName}',
		'overallFeedback': 'Comentário geral',
		'overallFeedbackAriaLabel': 'Comentário geral do nível {levelName}',
		'overallLevelDeleted': 'Nível geral {name} excluído',
		'overallLevelName': 'Nome do nível geral',
		'overallLevelRangeStart': 'Intervalo de início de nível geral',
		'overallScore': 'Pontuação geral',
		'overallScoreDescription': 'Um nível de desempenho é atribuído a cada envio com base na pontuação geral da rubrica.',
		'overallScoreHeader': 'Pontuação geral',
		'overriddenScoreTip': 'A pontuação do critério foi substituída',
		'overriddenTotalScoreTip': 'A pontuação geral da rubrica foi substituída. A pontuação não será mais atualizada com base nas alterações da rubrica.',
		'overrideLabel': 'Override',
		'percentage': '{number} %',
		'points': '{number} {number, plural, one {ponto} other {pontos}}',
		'pointsAbbreviation': 'pts',
		'pointsAreRequired': 'O valor do ponto é obrigatório',
		'pointsMinimum': '{number} {number, plural, one {{ponto} other {pontos}} mínimo',
		'pointsSaveFailed': 'Falha ao salvar os pontos',
		'preview': 'Visualizar',
		'rangeStartInvalid': 'O valor do início do intervalo é inválido',
		'rangeStartOrMore': 'ou mais',
		'rangeStartRequired': 'O valor do início do intervalo é obrigatório',
		'refreshText': 'atualizar a página',
		'removeCriterion': 'Remover Critério {name}',
		'removeLevel': 'Remover Nível {name}',
		'removeOverallLevel': 'Remover o Nível geral {name}',
		'reverseLevelOrder': 'Reverter Ordem do Nível',
		'reverseLevelsSuccessful': 'A ordem do nível foi revertida',
		'rubricLoadingErrorAriaAlert': 'Houve um problema ao carregar sua rubrica. Ela não pode ser exibida.',
		'rubricLoadingErrorMessage': 'Infelizmente, não foi possível exibir a rubrica.',
		'rubricSavingErrorAriaAlert': 'Ocorreu um problema ao salvar sua rubrica.',
		'rubricSavingErrorMessage': 'Algo deu errado. Verifique sua rubrica.',
		'rubricStatus': 'Status: {status}',
		'rubricSummaryA11y': 'A tabela lista critérios e nomes de grupos de critérios na primeira coluna. A primeira linha lista nomes de nível e inclui pontuações caso a rubrica use um método de pontuação numérica.',
		'rubricType': 'Tipo: {rubricType}',
		'rubricVisibility': 'Visibilidade da rubrica',
		'rubricVisibilityAlways': 'A rubrica está visível para os alunos',
		'rubricVisibilityNever': 'A rubrica está oculta para os alunos',
		'rubricVisibilityOnceFeedbackPosted': 'A rubrica fica oculta para os alunos até que os comentários sejam publicados',
		'rubricVisibilitySaveFailed': 'Falha ao alterar a visibilidade da rubrica.',
		'scoreOutOf': '{score} / {outOf}',
		'scoresVisibilityHidden': 'As pontuações estão ocultas para os alunos',
		'scoresVisibilityVisible': 'As pontuações estão visíveis para os alunos',
		'scoring': 'Pontuação: {method}',
		'setScoreVisibilityFailed': 'Falha na configuração da visibilidade da pontuação.',
		'statistics': 'Estatísticas',
		'total': 'Total',
		'totalScoreAriaLabel': 'A rubrica refere-se à pontuação total máxima de {value} pontos.'
	}
};