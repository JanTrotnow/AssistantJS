import { inject, injectable, optional } from "inversify";
import { TranslateHelper } from "../../../../../src/components/i18n/public-interfaces";
import { Logger } from "../../../../../src/components/root/public-interfaces";
import { BaseState } from "../../../../../src/components/state-machine/base-state";
import { stayInContext } from "../../../../../src/components/state-machine/decorators/stay-in-context-decorator";
import { State, Transitionable } from "../../../../../src/components/state-machine/public-interfaces";
import { ResponseFactory } from "../../../../../src/components/unifier/public-interfaces";
import { testCallback } from "../../../../components/state-machine/context.spec";

@stayInContext(testCallback)
@injectable()
export class ContextAState extends BaseState implements State.Required {
  public responseFactory: ResponseFactory;
  public extraction: any;

  constructor(
    @inject("core:unifier:current-response-factory") responseFactory: ResponseFactory,
    @inject("core:unifier:current-extraction") extraction: any,
    @inject("core:i18n:current-translate-helper") translateHelper: TranslateHelper,
    @inject("core:root:current-logger") logger: Logger
  ) {
    super(responseFactory, translateHelper, extraction, logger);
    this.extraction = extraction;
    this.responseFactory = responseFactory;
  }

  public async exampleAIntent(machine: Transitionable) {
    // do something
  }
}
