<template>
    <div>
        <b-navbar id="navColor" type="dark" toggleable class="navProfile">
            <b-navbar-toggle target="nav_category"></b-navbar-toggle>
            <b-collapse is-nav id="nav_category">
                <b-navbar-nav>
                    <router-link to="/Profile">
                        <b-btn class="item_prof category_item_prof">Mis datos</b-btn>
                    </router-link>
                    <router-link to="/Purchasing">
                        <b-btn class="item_prof category_item_prof">Historial de mis compras</b-btn>            
                    </router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name:'NavProfile'    
}
</script>

<style>
.navProfile{
    padding-left: 5%;
    font-weight: 400;
    background: #4DB6AC !important;
}
.category_item_prof{
    background: none !important;
    border: none !important;
    font-size: 17px;
    color: rgb(249, 251, 253);
}
.category_item_prof:hover{
    background: none;
}
.item_prof{
    margin-right: 50px !important;
    padding: 0;
}
</style>
