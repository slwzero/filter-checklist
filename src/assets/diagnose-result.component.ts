import { Component, OnInit, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { parse } from "querystring";
import { ProfileService, UserService } from "app/core";
import {
  ToastService,
  ToastColorOption
} from "app/core/services/toast.service";
import { text, listener } from "@angular/core/src/render3/instructions";
import { GridService, IFIlerInput } from "app/core/services";
@Component({
  selector: "app-diagnose-result",
  templateUrl: "./diagnose-result.component.html",
  styleUrls: ["./diagnose-result.component.scss"]
})
export class DiagnoseResultComponent implements OnInit {
  @Input()
  haveResult;
  @Input()
  filterData: any;
  filterColor = false;

  myControl = new FormControl();
  isFilter = false;
  getDiagnostics: any = {};
  options: string[] = ["Valuation", "Value accuracy"];
  filteredOptions: Observable<string[]>;
  isTokenMode = false;
  getDoagnoseResult = {
    propertion: [
      {
        name: "Review required",
        color: "#F1A636",
        bars: [],
        num: 2,
        total: 12
      },
      {
        name: "Issue confirmed",
        color: "#398F90",
        bars: [],
        num: 4,
        total: 12
      },
      {
        name: "No issue",
        bars: [],
        num: 6,
        total: 12
      }
    ],
    failed: 0,
    succeed: 0,
    total: 0
  };
  constructor(
    private userService: UserService,
    private gridService: GridService
  ) {}

  ngOnInit() {
    // this.userService.getDiagnostics().subscribe(data => {
    //   if (data !== null) {
    //     this.getDiagnostics.failed = data.failed;
    //     this.getDiagnostics.success = data.success;
    //     this.getDiagnostics.total = data.total;
    //   }
    // });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
    this.test();
  }
  filterShow() {
    this.isFilter = !this.isFilter;
    this.filterColor = !this.filterColor;
  }
  refreshGrid(result) {
    if (!result.data) {
      return;
    }
    // resultData为所有的已经勾选的项的列表。把它传给后台。
    //  数据结构为
    // [
    //   {
    //     name: 'activity',
    //     list: ['a']
    //   },
    //   {
    //     name: 'assetclass',
    //     list: []
    //   },
    //   ...
    // ]
    const resultData = this.transformResultData(result.data);
    this.toggleMode(result, resultData);
    this.submitFilterResult(resultData);
  }
  toggleMode(result, resultData) {
    // app-diagnose-filter组件里点击filter result 按钮
    if (result.action === "filterResult") {
      this.isTokenMode = true; // 显示圈圈，隐藏checklist
    }
    // app-diagnose-filter组件里点击filter result 按钮，隐藏filter，显示metrics
    if (result.action === "resetFilter") {
      this.isFilter = this.filterColor = false; // 隐藏filter
      this.isTokenMode = false; // 隐藏圈圈，显示checklist
    }
    // app-diagnose-filter-tokens组件里点击X
    if (result.action === "clearToken") {
      const noneChecked = resultData.every(resultItem => {
        return resultItem.list.length === 0;
      });
      // 所有的椭圆都被X掉，则隐藏圈圈，显示checklist
      if (noneChecked) {
        this.isTokenMode = false;
      }
    }
    // app-diagnose-filter-tokens组件里点击clear all按钮
    if (result.action === "clearAllTokens") {
      this.isTokenMode = false;
    }
  }
  transformResultData(data) {
    const result: IFIlerInput[] = [];
    const nameMap = {
      category: "category",
      regulatory: "regulatory",
      asset: "assetclass",
      activity: "activity",
      impacted: "impactedRecords"
    };
    data.forEach(el => {
      const checkResult = {
        name: nameMap[el.type],
        list: []
      };
      el.list.forEach(i => {
        if (i.checked) {
          checkResult.list.push(i.label);
        }
        if (i.sub) {
          i.sub.forEach(s => {
            if (s.checked) {
              checkResult.list.push(s.value);
            }
          });
        }
      });
      result.push(checkResult);
    });
    return result;
  }
  submitFilterResult(result) {
    console.log(result);
    this.gridService.getGrid(result).subscribe(data => {
      // data = result;
      this.updateGrid(data);
    });
  }
  updateGrid(gridData) {
    // 更新grid
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(
      option => option.toLowerCase().indexOf(filterValue) === 0
    );
  }
  test() {}
}
