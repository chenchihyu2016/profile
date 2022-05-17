<template>
    <div class="landing_page_container">
        <span class="greeting">{{ $t('LANDING_PAGE_GREETING') }}</span>
        <span
            class="description"
            v-html="$t('LANDING_PAGE_DESCRIPTION')"
        ></span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return {};
    }
});
</script>

<style scoped lang="scss">
.landing_page_container {
    @include flex(center, flex-start);
    align-content: center;
    width: 100%;
    height: 100%;
    text-align: justify;

    .greeting {
        display: block;
        width: 100%;
        font-size: 2rem;
        line-height: 3rem;
    }

    .description {
        font-size: 1rem;
        line-height: 2rem;
    }

    .mark {
        color: $color-primary;
    }
}
</style>
