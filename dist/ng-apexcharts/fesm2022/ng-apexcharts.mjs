import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, Input, ViewChild, NgModule } from '@angular/core';
import { asapScheduler } from 'rxjs';
import ApexCharts from 'apexcharts';

class ChartComponent {
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

window.ApexCharts = ApexCharts;
const declerations = [ChartComponent];
class NgApexchartsModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: NgApexchartsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.6", ngImport: i0, type: NgApexchartsModule, declarations: [ChartComponent], exports: [ChartComponent] }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: NgApexchartsModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.6", ngImport: i0, type: NgApexchartsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [...declerations],
                    imports: [],
                    exports: [...declerations],
                }]
        }] });

/*
 * Public API Surface of ng-apexcharts
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ChartComponent, NgApexchartsModule };
//# sourceMappingURL=ng-apexcharts.mjs.map
