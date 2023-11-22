<template>
    <v-layout>
      <v-navigation-drawer v-model="drawer" :rail="rail" @click="rail = false">
        <v-list-item prepend-icon="mdi-controller" nav>
          <router-link to="/" class="custom-link">Boardgames</router-link>
          <template v-slot:append>
            <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item v-for="item in menuItems" :key="item.title">
              <v-list-item-action>
                <router-link :to="item.link">
                  <div class="d-flex align-center">
                    <v-icon class="icon">{{ item.icon }}</v-icon>
                    <v-list-item-title class="title" >{{ item.title }}</v-list-item-title>
                  </div>
                </router-link>
              </v-list-item-action>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      drawer: true,
      rail: true,
      menuItems: [
        { icon: 'mdi-card-search', title: 'View Meetups', link: '/event' },
        { icon: 'mdi-plus-circle', title: 'Add Meetups', link: '/event/new' },
        { icon: 'mdi-account-circle', title: 'Profile', link: '/profile' },
        { icon: 'mdi-clipboard-account', title: 'Sign up', link: '/signup' },
        { icon: 'mdi-login', title: 'Login', link: '/signin' },
      ]
    }
  }
}
</script>

<style>

</style>
