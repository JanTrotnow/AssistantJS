import { inject, injectable, optional } from "inversify";
import { TranslateHelper } from "../../../../src/components/i18n/public-interfaces";
import { Logger } from "../../../../src/components/root/public-interfaces";
import { BaseState } from "../../../../src/components/state-machine/base-state";
import { filter } from "../../../../src/components/state-machine/filter-decorator";
import { State } from "../../../../src/components/state-machine/public-interfaces";
import { ResponseFactory } from "../../../../src/components/unifier/public-interfaces";
import { TestFilterC } from "../filters/test-filter-c";

@injectable()
export class FilterCState extends BaseState implements State.Required {
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

  @filter(TestFilterC)
  public filterTestAIntent(...args: any[]) {
    this.endSessionWith(this.t("filter.stateC.intentA"));
  }

  public filterTestBIntent() {
    this.endSessionWith(this.t("filter.stateC.intentB"));
  }
}