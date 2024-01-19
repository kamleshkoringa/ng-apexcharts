import { Component, ElementRef, Input, ViewChild, NgZone, ChangeDetectionStrategy, } from "@angular/core";
import { asapScheduler } from "rxjs";
import ApexCharts from "apexcharts";
import * as i0 from "@angular/core";
export class ChartComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.autoUpdateSeries = true;
    }
    ngOnChanges(changes) {
        asapScheduler.schedule(() => {
            if (this.autoUpdateSeries &&
                Object.keys(changes).filter((c) => c !== "series").length === 0) {
                this.updateSeries(this.series, true);
                return;
            }
            this.createElement();
        });
    }
    ngOnDestroy() {
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    }
    createElement() {
        const options = {};
        if (this.annotations) {
            options.annotations = this.annotations;
        }
        if (this.chart) {
            options.chart = this.chart;
        }
        if (this.colors) {
            options.colors = this.colors;
        }
        if (this.dataLabels) {
            options.dataLabels = this.dataLabels;
        }
        if (this.series) {
            options.series = this.series;
        }
        if (this.stroke) {
            options.stroke = this.stroke;
        }
        if (this.labels) {
            options.labels = this.labels;
        }
        if (this.legend) {
            options.legend = this.legend;
        }
        if (this.fill) {
            options.fill = this.fill;
        }
        if (this.tooltip) {
            options.tooltip = this.tooltip;
        }
        if (this.plotOptions) {
            options.plotOptions = this.plotOptions;
        }
        if (this.responsive) {
            options.responsive = this.responsive;
        }
        if (this.markers) {
            options.markers = this.markers;
        }
        if (this.noData) {
            options.noData = this.noData;
        }
        if (this.xaxis) {
            options.xaxis = this.xaxis;
        }
        if (this.yaxis) {
            options.yaxis = this.yaxis;
        }
        if (this.forecastDataPoints) {
            options.forecastDataPoints = this.forecastDataPoints;
        }
        if (this.grid) {
            options.grid = this.grid;
        }
        if (this.states) {
            options.states = this.states;
        }
        if (this.title) {
            options.title = this.title;
        }
        if (this.subtitle) {
            options.subtitle = this.subtitle;
        }
        if (this.theme) {
            options.theme = this.theme;
        }
        if (this.chartObj) {
            this.chartObj.destroy();
        }
        this.ngZone.runOutsideAngular(() => {
            this.chartObj = new ApexCharts(this.chartElement.nativeElement, options);
        });
        this.render();
    }
    render() {
        return this.ngZone.runOutsideAngular(() => this.chartObj.render());
    }
    updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
        return this.ngZone.runOutsideAngular(() => this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts));
    }
    updateSeries(newSeries, animate) {
        return this.ngZone.runOutsideAngular(() => this.chartObj.updateSeries(newSeries, animate));
    }
    appendSeries(newSeries, animate) {
        this.ngZone.runOutsideAngular(() => this.chartObj.appendSeries(newSeries, animate));
    }
    appendData(newData) {
        this.ngZone.runOutsideAngular(() => this.chartObj.appendData(newData));
    }
    toggleSeries(seriesName) {
        return this.ngZone.runOutsideAngular(() => this.chartObj.toggleSeries(seriesName));
    }
    showSeries(seriesName) {
        this.ngZone.runOutsideAngular(() => this.chartObj.showSeries(seriesName));
    }
    hideSeries(seriesName) {
        this.ngZone.runOutsideAngular(() => this.chartObj.hideSeries(seriesName));
    }
    resetSeries() {
        this.ngZone.runOutsideAngular(() => this.chartObj.resetSeries());
    }
    zoomX(min, max) {
        this.ngZone.runOutsideAngular(() => this.chartObj.zoomX(min, max));
    }
    toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.ngZone.runOutsideAngular(() => this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex));
    }
    destroy() {
        this.chartObj.destroy();
    }
    setLocale(localeName) {
        this.ngZone.runOutsideAngular(() => this.chartObj.setLocale(localeName));
    }
    paper() {
        this.ngZone.runOutsideAngular(() => this.chartObj.paper());
    }
    addXaxisAnnotation(options, pushToMemory, context) {
        this.ngZone.runOutsideAngular(() => this.chartObj.addXaxisAnnotation(options, pushToMemory, context));
    }
    addYaxisAnnotation(options, pushToMemory, context) {
        this.ngZone.runOutsideAngular(() => this.chartObj.addYaxisAnnotation(options, pushToMemory, context));
    }
    addPointAnnotation(options, pushToMemory, context) {
        this.ngZone.runOutsideAngular(() => this.chartObj.addPointAnnotation(options, pushToMemory, context));
    }
    removeAnnotation(id, options) {
        this.ngZone.runOutsideAngular(() => this.chartObj.removeAnnotation(id, options));
    }
    clearAnnotations(options) {
        this.ngZone.runOutsideAngular(() => this.chartObj.clearAnnotations(options));
    }
    dataURI(options) {
        return this.chartObj.dataURI(options);
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: ChartComponent, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    /** @nocollapse */ static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.6", type: ChartComponent, selector: "apx-chart", inputs: { chart: "chart", annotations: "annotations", colors: "colors", dataLabels: "dataLabels", series: "series", stroke: "stroke", labels: "labels", legend: "legend", markers: "markers", noData: "noData", fill: "fill", tooltip: "tooltip", plotOptions: "plotOptions", responsive: "responsive", xaxis: "xaxis", yaxis: "yaxis", forecastDataPoints: "forecastDataPoints", grid: "grid", states: "states", title: "title", subtitle: "subtitle", theme: "theme", autoUpdateSeries: "autoUpdateSeries" }, viewQueries: [{ propertyName: "chartElement", first: true, predicate: ["chart"], descendants: true, static: true }], usesOnChanges: true, ngImport: i0, template: `<div #chart></div>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "apx-chart",
                    template: `<div #chart></div>`,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }]; }, propDecorators: { chart: [{
                type: Input
            }], annotations: [{
                type: Input
            }], colors: [{
                type: Input
            }], dataLabels: [{
                type: Input
            }], series: [{
                type: Input
            }], stroke: [{
                type: Input
            }], labels: [{
                type: Input
            }], legend: [{
                type: Input
            }], markers: [{
                type: Input
            }], noData: [{
                type: Input
            }], fill: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], plotOptions: [{
                type: Input
            }], responsive: [{
                type: Input
            }], xaxis: [{
                type: Input
            }], yaxis: [{
                type: Input
            }], forecastDataPoints: [{
                type: Input
            }], grid: [{
                type: Input
            }], states: [{
                type: Input
            }], title: [{
                type: Input
            }], subtitle: [{
                type: Input
            }], theme: [{
                type: Input
            }], autoUpdateSeries: [{
                type: Input
            }], chartElement: [{
                type: ViewChild,
                args: ["chart", { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctYXBleGNoYXJ0cy9zcmMvbGliL2NoYXJ0L2NoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBSUwsU0FBUyxFQUNULE1BQU0sRUFDTix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUF1QnZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFckMsT0FBTyxVQUFVLE1BQU0sWUFBWSxDQUFDOztBQU9wQyxNQUFNLE9BQU8sY0FBYztJQTZCekIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMekIscUJBQWdCLEdBQUcsSUFBSSxDQUFDO0lBT2pDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDMUIsSUFDRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQy9EO2dCQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckMsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFTyxhQUFhO1FBQ25CLE1BQU0s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QWxCLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxrQkFBa0I7c0JBQTFCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUcsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUV3QyxZQUFZO3NCQUF6RCxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgTmdab25lLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgQXBleEFubm90YXRpb25zLFxyXG4gIEFwZXhBeGlzQ2hhcnRTZXJpZXMsXHJcbiAgQXBleENoYXJ0LFxyXG4gIEFwZXhEYXRhTGFiZWxzLFxyXG4gIEFwZXhGaWxsLFxyXG4gIEFwZXhHcmlkLFxyXG4gIEFwZXhMZWdlbmQsXHJcbiAgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcclxuICBBcGV4TWFya2VycyxcclxuICBBcGV4Tm9EYXRhLFxyXG4gIEFwZXhQbG90T3B0aW9ucyxcclxuICBBcGV4UmVzcG9uc2l2ZSxcclxuICBBcGV4U3RhdGVzLFxyXG4gIEFwZXhTdHJva2UsXHJcbiAgQXBleFRoZW1lLFxyXG4gIEFwZXhUaXRsZVN1YnRpdGxlLFxyXG4gIEFwZXhUb29sdGlwLFxyXG4gIEFwZXhYQXhpcyxcclxuICBBcGV4WUF4aXMsXHJcbiAgQXBleEZvcmVjYXN0RGF0YVBvaW50cyxcclxufSBmcm9tIFwiLi4vbW9kZWwvYXBleC10eXBlc1wiO1xyXG5pbXBvcnQgeyBhc2FwU2NoZWR1bGVyIH0gZnJvbSBcInJ4anNcIjtcclxuXHJcbmltcG9ydCBBcGV4Q2hhcnRzIGZyb20gXCJhcGV4Y2hhcnRzXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJhcHgtY2hhcnRcIixcclxuICB0ZW1wbGF0ZTogYDxkaXYgI2NoYXJ0PjwvZGl2PmAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIGNoYXJ0OiBBcGV4Q2hhcnQ7XHJcbiAgQElucHV0KCkgYW5ub3RhdGlvbnM6IEFwZXhBbm5vdGF0aW9ucztcclxuICBASW5wdXQoKSBjb2xvcnM6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGRhdGFMYWJlbHM6IEFwZXhEYXRhTGFiZWxzO1xyXG4gIEBJbnB1dCgpIHNlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXM7XHJcbiAgQElucHV0KCkgc3Ryb2tlOiBBcGV4U3Ryb2tlO1xyXG4gIEBJbnB1dCgpIGxhYmVsczogc3RyaW5nW107XHJcbiAgQElucHV0KCkgbGVnZW5kOiBBcGV4TGVnZW5kO1xyXG4gIEBJbnB1dCgpIG1hcmtlcnM6IEFwZXhNYXJrZXJzO1xyXG4gIEBJbnB1dCgpIG5vRGF0YTogQXBleE5vRGF0YTtcclxuICBASW5wdXQoKSBmaWxsOiBBcGV4RmlsbDtcclxuICBASW5wdXQoKSB0b29sdGlwOiBBcGV4VG9vbHRpcDtcclxuICBASW5wdXQoKSBwbG90T3B0aW9uczogQXBleFBsb3RPcHRpb25zO1xyXG4gIEBJbnB1dCgpIHJlc3BvbnNpdmU6IEFwZXhSZXNwb25zaXZlW107XHJcbiAgQElucHV0KCkgeGF4aXM6IEFwZXhYQXhpcztcclxuICBASW5wdXQoKSB5YXhpczogQXBleFlBeGlzIHwgQXBleFlBeGlzW107XHJcbiAgQElucHV0KCkgZm9yZWNhc3REYXRhUG9pbnRzOiBBcGV4Rm9yZWNhc3REYXRhUG9pbnRzO1xyXG4gIEBJbnB1dCgpIGdyaWQ6IEFwZXhHcmlkO1xyXG4gIEBJbnB1dCgpIHN0YXRlczogQXBleFN0YXRlcztcclxuICBASW5wdXQoKSB0aXRsZTogQXBleFRpdGxlU3VidGl0bGU7XHJcbiAgQElucHV0KCkgc3VidGl0bGU6IEFwZXhUaXRsZVN1YnRpdGxlO1xyXG4gIEBJbnB1dCgpIHRoZW1lOiBBcGV4VGhlbWU7XHJcblxyXG4gIEBJbnB1dCgpIGF1dG9VcGRhdGVTZXJpZXMgPSB0cnVlO1xyXG5cclxuICBAVmlld0NoaWxkKFwiY2hhcnRcIiwgeyBzdGF0aWM6IHRydWUgfSkgcHJpdmF0ZSBjaGFydEVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgcHJpdmF0ZSBjaGFydE9iajogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nWm9uZTogTmdab25lKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLmF1dG9VcGRhdGVTZXJpZXMgJiZcclxuICAgICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoKGMpID0+IGMgIT09IFwic2VyaWVzXCIpLmxlbmd0aCA9PT0gMFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNlcmllcyh0aGlzLnNlcmllcywgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICBpZiAodGhpcy5jaGFydE9iaikge1xyXG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnM6IGFueSA9IHt9O1xyXG5cclxuICAgIGlmICh0aGlzLmFubm90YXRpb25zKSB7XHJcbiAgICAgIG9wdGlvbnMuYW5ub3RhdGlvbnMgPSB0aGlzLmFubm90YXRpb25zO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2hhcnQpIHtcclxuICAgICAgb3B0aW9ucy5jaGFydCA9IHRoaXMuY2hhcnQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb2xvcnMpIHtcclxuICAgICAgb3B0aW9ucy5jb2xvcnMgPSB0aGlzLmNvbG9ycztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhdGFMYWJlbHMpIHtcclxuICAgICAgb3B0aW9ucy5kYXRhTGFiZWxzID0gdGhpcy5kYXRhTGFiZWxzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VyaWVzKSB7XHJcbiAgICAgIG9wdGlvbnMuc2VyaWVzID0gdGhpcy5zZXJpZXM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdHJva2UpIHtcclxuICAgICAgb3B0aW9ucy5zdHJva2UgPSB0aGlzLnN0cm9rZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxhYmVscykge1xyXG4gICAgICBvcHRpb25zLmxhYmVscyA9IHRoaXMubGFiZWxzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGVnZW5kKSB7XHJcbiAgICAgIG9wdGlvbnMubGVnZW5kID0gdGhpcy5sZWdlbmQ7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWxsKSB7XHJcbiAgICAgIG9wdGlvbnMuZmlsbCA9IHRoaXMuZmlsbDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRvb2x0aXApIHtcclxuICAgICAgb3B0aW9ucy50b29sdGlwID0gdGhpcy50b29sdGlwO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucGxvdE9wdGlvbnMpIHtcclxuICAgICAgb3B0aW9ucy5wbG90T3B0aW9ucyA9IHRoaXMucGxvdE9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5yZXNwb25zaXZlKSB7XHJcbiAgICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IHRoaXMucmVzcG9uc2l2ZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1hcmtlcnMpIHtcclxuICAgICAgb3B0aW9ucy5tYXJrZXJzID0gdGhpcy5tYXJrZXJzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubm9EYXRhKSB7XHJcbiAgICAgIG9wdGlvbnMubm9EYXRhID0gdGhpcy5ub0RhdGE7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy54YXhpcykge1xyXG4gICAgICBvcHRpb25zLnhheGlzID0gdGhpcy54YXhpcztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnlheGlzKSB7XHJcbiAgICAgIG9wdGlvbnMueWF4aXMgPSB0aGlzLnlheGlzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9yZWNhc3REYXRhUG9pbnRzKSB7XHJcbiAgICAgIG9wdGlvbnMuZm9yZWNhc3REYXRhUG9pbnRzID0gdGhpcy5mb3JlY2FzdERhdGFQb2ludHM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5ncmlkKSB7XHJcbiAgICAgIG9wdGlvbnMuZ3JpZCA9IHRoaXMuZ3JpZDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlcykge1xyXG4gICAgICBvcHRpb25zLnN0YXRlcyA9IHRoaXMuc3RhdGVzO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudGl0bGUpIHtcclxuICAgICAgb3B0aW9ucy50aXRsZSA9IHRoaXMudGl0bGU7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdWJ0aXRsZSkge1xyXG4gICAgICBvcHRpb25zLnN1YnRpdGxlID0gdGhpcy5zdWJ0aXRsZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRoZW1lKSB7XHJcbiAgICAgIG9wdGlvbnMudGhlbWUgPSB0aGlzLnRoZW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRPYmouZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgdGhpcy5jaGFydE9iaiA9IG5ldyBBcGV4Q2hhcnRzKHRoaXMuY2hhcnRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZW5kZXIoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai5yZW5kZXIoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlT3B0aW9ucyhcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHJlZHJhd1BhdGhzPzogYm9vbGVhbixcclxuICAgIGFuaW1hdGU/OiBib29sZWFuLFxyXG4gICAgdXBkYXRlU3luY2VkQ2hhcnRzPzogYm9vbGVhblxyXG4gICk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoudXBkYXRlT3B0aW9ucyhcclxuICAgICAgb3B0aW9ucyxcclxuICAgICAgcmVkcmF3UGF0aHMsXHJcbiAgICAgIGFuaW1hdGUsXHJcbiAgICAgIHVwZGF0ZVN5bmNlZENoYXJ0c1xyXG4gICAgKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBkYXRlU2VyaWVzKFxyXG4gICAgbmV3U2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcclxuICAgIGFuaW1hdGU/OiBib29sZWFuXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai51cGRhdGVTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXBwZW5kU2VyaWVzKFxyXG4gICAgbmV3U2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcclxuICAgIGFuaW1hdGU/OiBib29sZWFuXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmFwcGVuZFNlcmllcyhuZXdTZXJpZXMsIGFuaW1hdGUpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhcHBlbmREYXRhKG5ld0RhdGE6IGFueVtdKSB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmFwcGVuZERhdGEobmV3RGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVNlcmllcyhzZXJpZXNOYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoudG9nZ2xlU2VyaWVzKHNlcmllc05hbWUpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93U2VyaWVzKHNlcmllc05hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai5zaG93U2VyaWVzKHNlcmllc05hbWUpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlU2VyaWVzKHNlcmllc05hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai5oaWRlU2VyaWVzKHNlcmllc05hbWUpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldFNlcmllcygpIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoucmVzZXRTZXJpZXMoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgem9vbVgobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLnpvb21YKG1pbiwgbWF4KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdG9nZ2xlRGF0YVBvaW50U2VsZWN0aW9uKFxyXG4gICAgc2VyaWVzSW5kZXg6IG51bWJlcixcclxuICAgIGRhdGFQb2ludEluZGV4PzogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLnRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihzZXJpZXNJbmRleCwgZGF0YVBvaW50SW5kZXgpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXN0cm95KCkge1xyXG4gICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZU5hbWU/OiBzdHJpbmcpIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmouc2V0TG9jYWxlKGxvY2FsZU5hbWUpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBwYXBlcigpIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmoucGFwZXIoKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkWGF4aXNBbm5vdGF0aW9uKFxyXG4gICAgb3B0aW9uczogYW55LFxyXG4gICAgcHVzaFRvTWVtb3J5PzogYm9vbGVhbixcclxuICAgIGNvbnRleHQ/OiBhbnlcclxuICApIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmouYWRkWGF4aXNBbm5vdGF0aW9uKG9wdGlvbnMsIHB1c2hUb01lbW9yeSwgY29udGV4dCkpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFkZFlheGlzQW5ub3RhdGlvbihcclxuICAgIG9wdGlvbnM6IGFueSxcclxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXHJcbiAgICBjb250ZXh0PzogYW55XHJcbiAgKSB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLmFkZFlheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRQb2ludEFubm90YXRpb24oXHJcbiAgICBvcHRpb25zOiBhbnksXHJcbiAgICBwdXNoVG9NZW1vcnk/OiBib29sZWFuLFxyXG4gICAgY29udGV4dD86IGFueVxyXG4gICkge1xyXG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4gdGhpcy5jaGFydE9iai5hZGRQb2ludEFubm90YXRpb24ob3B0aW9ucywgcHVzaFRvTWVtb3J5LCBjb250ZXh0KSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlQW5ub3RhdGlvbihpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XHJcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB0aGlzLmNoYXJ0T2JqLnJlbW92ZUFubm90YXRpb24oaWQsIG9wdGlvbnMpKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjbGVhckFubm90YXRpb25zKG9wdGlvbnM/OiBhbnkpIHtcclxuICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMuY2hhcnRPYmouY2xlYXJBbm5vdGF0aW9ucyhvcHRpb25zKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGF0YVVSSShvcHRpb25zPzogYW55KTogUHJvbWlzZTx7IGltZ1VSSTogc3RyaW5nIH0+IHtcclxuICAgIHJldHVybiB0aGlzLmNoYXJ0T2JqLmRhdGFVUkkob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==