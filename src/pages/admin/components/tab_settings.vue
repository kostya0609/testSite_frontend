<template>
  <div>
    <el-row class="mt-3">
      <el-col
        :xs="24" :sm="24" :md="12"
        class="p-2 xs:p-px"
      >
        <label class="font-bold block mb-1">Отступ сверху</label>
        <change_padding
          :padding="paddings.top"
          type="top"
        />
      </el-col>

      <el-col
        :xs="24" :sm="24" :md="12"
        class="p-2 xs:p-px"
      >
        <label class="font-bold block mb-1">Отступ снизу</label>
        <change_padding
          :padding="paddings.bottom"
          type="bottom"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import Change_padding from "@/pages/admin/components/change_padding";

const props = defineProps({
  paddings : Object,
});

</script>

<style scoped>

</style>