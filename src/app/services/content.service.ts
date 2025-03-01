import { Injectable } from "@angular/core";
import { InjectContentFilesFilterFunction } from "@analogjs/content/lib/inject-content-files";
import { BuildAttributes, LearnAttributes, ToolAttributes } from "../models";
import { injectContentFiles } from "@analogjs/content";

@Injectable({
  providedIn: "root"
})
export class ContentService {
  private readonly buildContentFn: InjectContentFilesFilterFunction<BuildAttributes> =
    (contentFile) => !!contentFile.filename.includes("/src/content/build/");
  readonly builds = injectContentFiles(this.buildContentFn);

  private readonly learnFilterFn: InjectContentFilesFilterFunction<LearnAttributes> =
    (contentFile) => !!contentFile.filename.includes("/src/content/learn/");
  readonly learns = injectContentFiles(this.learnFilterFn);

  private readonly toolFilterFn: InjectContentFilesFilterFunction<ToolAttributes> =
    (contentFile) => !!contentFile.filename.includes("/src/content/tool/");
  readonly tools = injectContentFiles(this.toolFilterFn);
}