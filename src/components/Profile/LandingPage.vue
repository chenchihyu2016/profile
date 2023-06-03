<template>
    <section class="landing_page_container">
        <h1 class="greeting">{{ $t('LANDING_PAGE_GREETING') }}</h1>
        <p class="description" v-html="$t('LANDING_PAGE_DESCRIPTION')" />
    </section>
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
    scroll-margin-top: 3rem;

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
