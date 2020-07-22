<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" />
            <span>
                <g-link class="nav__link" to="/journal">Journal</g-link>
            </span>
            <span>
                <g-link class="nav__link" to="/contact">Say Hi!</g-link>
            </span>
        </div>

    </footer>

</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>
