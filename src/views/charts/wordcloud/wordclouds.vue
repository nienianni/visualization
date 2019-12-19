<template>
        <div>
            <ve-wordcloud :data="chartData"></ve-wordcloud>
        </div>
</template>

<script>
    // 引入组件
    import VeWordcloud from "v-charts/lib/wordcloud";
    import jsonData from "./Email_person"

    export default {
        components: { VeWordcloud },
        data() {
            return {
                chartData: {
                    columns: ["name", "value"],
                    rows: this.getRows(),
                }
            };
        },
        methods:{
            getRows() {
                return jsonData.Boss.send;
            },
        }
    };

</script>
