<template lang="html">
  <div
    :class="[
      'vl-xs-'+vlXs,
      'vl-sm-'+vlSm,
      'vl-lg-'+vlLg,
    ]"

    :style="{
      'order':vlOrder,
      'justify-content':vlJustify,
      'display':vlType,
      'align-items':vlAlign,
      'margin-left':vlOffset*100/12+'%',
      'width':vlW*100/12+'%'}"
    class="vl-col"
  >
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'VlCol',
    props: {
      vlW: {
        type: [Number, String],
        default: 12,
      },
      vlXs: {
        type: [Number, String],
        default: ''
      },
      vlSm: {
        type: [Number, String],
        default: ''
      },
      vlLg: {
        type: [Number, String],
        default: ''
      },
      vlOffset: {
        type: [Number, String],
        default: 0
      },
      vlType: {
        type: String,
        default: null,
      },
      vlJustify: {
        type: String,
        default: null,
      },
      vlAlign: {
        type: String,
        default: null,
      },
      vlOrder: {
        default: null,
        type: [String, Number]
      }
    }
  }
</script>

<style lang="css">
  .vl-col {
    float: left;
  }

  .vl-lg-12 {
    width: 100% !important;
  }

  .vl-lg-11 {
    width: 91.66666666666667% !important;
  }

  .vl-lg-10 {
    width: 83.33333333333333% !important;
  }

  .vl-lg-9 {
    width: 75% !important;
  }

  .vl-lg-8 {
    width: 66.66666666666667% !important;
  }

  .vl-lg-7 {
    width: 58.33333333333333% !important;
  }

  .vl-lg-6 {
    width: 50% !important;
  }

  .vl-lg-5 {
    width: 41.66666666666667% !important;
  }

  .vl-lg-4 {
    width: 33.33333333333333% !important;
  }

  .vl-lg-3 {
    width: 25% !important;
  }

  .vl-lg-2 {
    width: 16.66666666666667% !important;
  }

  .vl-lg-1 {
    width: 8.333333333333333% !important;
  }

  .vl-lg-0 {
    display: none !important;
  }

  @media only screen and (max-width: 900px) {
    .vl-sm-12 {
      width: 100% !important;
    }

    .vl-sm-11 {
      width: 91.66666666666667% !important;
    }

    .vl-sm-10 {
      width: 83.33333333333333% !important;
    }

    .vl-sm-9 {
      width: 75% !important;
    }

    .vl-sm-8 {
      width: 66.66666666666667% !important;
    }

    .vl-sm-7 {
      width: 58.33333333333333% !important;
    }

    .vl-sm-6 {
      width: 50% !important;
    }

    .vl-sm-5 {
      width: 41.66666666666667% !important;
    }

    .vl-sm-4 {
      width: 33.33333333333333% !important;
    }

    .vl-sm-3 {
      width: 25% !important;
    }

    .vl-sm-2 {
      width: 16.66666666666667% !important;
    }

    .vl-sm-1 {
      width: 8.333333333333333% !important;
    }

    .vl-sm-0 {
      display: none !important;
    }
  }

  @media only screen and (max-width: 600px) {
    .vl-xs-12 {
      width: 100% !important;
    }

    .vl-xs-11 {
      width: 91.66666666666667% !important;
    }

    .vl-xs-10 {
      width: 83.33333333333333% !important;
    }

    .vl-xs-9 {
      width: 75% !important;
    }

    .vl-xs-8 {
      width: 66.66666666666667% !important;
    }

    .vl-xs-7 {
      width: 58.33333333333333% !important;
    }

    .vl-xs-6 {
      width: 50% !important;
    }

    .vl-xs-5 {
      width: 41.66666666666667% !important;
    }

    .vl-xs-4 {
      width: 33.33333333333333% !important;
    }

    .vl-xs-3 {
      width: 25% !important;
    }

    .vl-xs-2 {
      width: 16.66666666666667% !important;
    }

    .vl-xs-1 {
      width: 8.333333333333333% !important;
    }

    .vl-xs-0 {
      display: none !important;
    }
  }


</style>
