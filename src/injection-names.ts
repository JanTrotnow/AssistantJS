/** Names of injectionable services, leads to fewer typing errors for most important injections */
export const injectionNames = {
  i18nWrapper: "core:i18n:wrapper",
  stateFactory: "core:state-machine:state-factory",
  logger: "core:root:logger",
  eventBus: "core:root:event-bus",
  componentSpecificLoggerFactory: "core:root:component-specific-logger-factory",
  current: {
    i18nTranslateValuesFor: "core:i18n:current-translate-values-for",
    translateHelper: "core:i18n:current-translate-helper",
    stateMachine: "core:state-machine:current-state-machine",
    stateNameProvider: "core:state-machine:current-state-name-provider",
    stateProvider: "core:state-machine:current-state-provider",
    stateSetupSet: "core:state-machine:current-state-setup-set",
    sessionFactory: "core:services:current-session-factory",
    extraction: "core:unifier:current-extraction",
    responseFactory: "core:unifier:current-response-factory",
    entityDictionary: "core:unifier:current-entity-dictionary",
    responseHandler: "core:unifier:current-response-handler",
    logger: "core:root:current-logger",
    killSessionService: "core:services:current-kill-session-promise",
    requestContext: "core:root:current-request-context",
    responseHandlerExtensions: "core:unifier:response-handler-extensions",
  },
};
