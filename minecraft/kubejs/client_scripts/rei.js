// -----------------------------------------
// CREATED BY STATIC FOR USE IN
// STATECH INDUSTRY
// -----------------------------------------

REIEvents.hide('item', e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let ad = (id) => `ad_astra:${id}`;
    let ae = (id) => `ae2:${id}`;
    let kb = (id) => `kibe:${id}`;
    let tr = (id) => `techreborn:${id}`;
    let tf = (id) => `twilightforest:${id}`;
    let cr = (id) => `create:${id}`;
    let ca = (id) => `createaddition:${id}`;
    let mi = (id) => `modern_industrialization:${id}`;
    let md = (id) => `moderndynamics:${id}`;
    let gc = (id) => `geocluster:${id}`;
    let vh = (id) => `vanilla-hammers:${id}`;
    let db = (id) => `decorative_blocks:${id}`;
    let kj = (id) => `kubejs:${id}`;

    const REI_DELETED_ITEMS = [
        ad('coal_generator'),
        ad('steel_cable'),
        ad('desh_cable'),
        ad('desh_fluid_pipe'),
        ad('ostrum_fluid_pipe'),
        ad('hammer'),
        ad('compressor'),
        ad('oil_bucket'),
        ad('oil'),
        ad('water_pump'),
        ad('astrodux'),
        ad('cable_duct'),
        ad('fluid_pipe_duct'),
        ae('vibration_chamber'),
        ae('ender_dust'),
        ae('sky_stone_tank'),
        ae('inscriber'),
        cr('crushed_platinum_ore'),
        ca('rolling_mill'),
        ca('creative_energy'),
        ca('biomass'),
        ca('biomass_pellet'),
        ca('spool'),
        ca('copper_spool'),
        ca('gold_spool'),
        ca('copper_wire'),
        ca('copper_rod'),
        ca('iron_wire'),
        ca('iron_rod'),
        ca('gold_wire'),
        ca('gold_rod'),
        ca('brass_rod'),
        ca('bioethanol'),
        ca('bioethanol_bucket'),
        ca('seed_oil'),
        ca('seed_oil_bucket'),
        ca('accumulator'),
        ca('tesla_coil'),
        ca('connector'),
        ca('capacitor'),
        ca('diamond_grit'),
        ca('festive_spool'),
        ca('portable_energy_interface'),
        ca('modular_accumulator'),
        ca('redstone_relay'),
        db('blockstate_copy_item'),
        gc('aluminium_ingot'),
        gc('raw_zinc'),
        gc('raw_silver'),
        gc('raw_lead'),
        gc('raw_aluminium'),
        gc('raw_uranium'),
        gc('raw_tin'),
        gc('raw_platinum'),
        gc('raw_titanium'),
        gc('raw_nickel'),
        gc('raw_ancient_debris'),
        gc('aluminium_nugget'),
        gc('zinc_ore'),
        gc('deepslate_zinc_ore'),
        gc('silver_ore'),
        gc('deepslate_silver_ore'),
        gc('lead_ore'),
        gc('deepslate_lead_ore'),
        gc('aluminium_ore'),
        gc('deepslate_aluminium_ore'),
        gc('uranium_ore'),
        gc('deepslate_uranium_ore'),
        gc('tin_ore'),
        gc('deepslate_tin_ore'),
        gc('platinum_ore'),
        gc('deepslate_platinum_ore'),
        gc('titanium_ore'),
        gc('deepslate_titanium_ore'),
        gc('nickel_ore'),
        gc('deepslate_nickel_ore'),
        gc('quartz_ore'),
        gc('deepslate_quartz_ore'),
        gc('ancient_debris_ore'),
        gc('sulfur_ore_sample'),
        gc('potassium_ore_sample'),
        gc('purpur_remnants_ore_sample'),
        gc('nebulite_ore_sample'),
        gc('shadow_quartz_ore_sample'),
        gc('amber_ore_sample'),
        gc('ender_ore_sample'),
        gc('cincinnasite_ore_sample'),
        gc('nether_lapis_ore_sample'),
        gc('nether_redstone_ore_sample'),
        gc('nether_ruby_ore_sample'),
        kb('tank'),
        kb('xp_shower'),
        kb('xp_drain'),
        kb('angel_ring'),
        kj('statech_logo'),
        kj('voice_chat'),
        md('wrench'),
        mi('guidebook'),
        tf('uncrafting_table'),
        tr('nichrome_heating_coil'),
        tr('lithium'),
        tr('heliumplasma'),
        tr('helium3'),
        tr('helium'),
        tr('titanium_small_dust'),
        tr('alloy_smelter'),
        tr('iron_alloy_furnace'),
        tr('saw_dust'),
        tr('cloaking_device'),
        tr('fusion_coil'),
        tr('basic_tank_unit'),
        tr('advanced_tank_unit'),
        tr('industrial_tank_unit'),
        tr('quantum_tank_unit'),
        tr('creative_tank_unit'),
        tr('assembly_machine'),
        tr('chemical_reactor'),
        tr('distillation_tower'),
        tr('fluid_replicator'),
        tr('grinder'),
        tr('electric_furnace'),
        tr('yellow_garnet_dust'),
        tr('yellow_garnet_gem'),
        tr('implosion_compressor'),
        tr('industrial_blast_furnace'),
        tr('industrial_centrifuge'),
        tr('industrial_electrolyzer'),
        tr('industrial_grinder'),
        tr('industrial_sawmill'),
        tr('iron_furnace'),
        tr('vacuum_freezer'),
        tr('solid_canning_machine'),
        tr('wiremill'),
        tr('block_breaker'),
        tr('block_placer'),
        tr('elevator'),
        tr('diesel_generator'),
        tr('fusion_control_computer'),
        tr('gas_turbine'),
        tr('plasma_generator'),
        tr('semi_fluid_generator'),
        tr('drain'),
        tr('lapotronic_su'),
        tr('lsu_storage'),
        tr('medium_voltage_su'),
        tr('high_voltage_su'),
        tr('lv_transformer'),
        tr('mv_transformer'),
        tr('hv_transformer'),
        tr('ev_transformer'),
        tr('chunk_loader'),
        tr('coal_plate'),
        tr('quartz_plate'),
        tr('rock_cutter'),
        tr('basic_jackhammer'),
        tr('advanced_jackhammer'),
        tr('basic_drill'),
        tr('advanced_drill'),
        tr('basic_chainsaw'),
        tr('advanced_chainsaw'),
        tr('transformer_upgrade'),
        tr('omni_tool'),
        tr('electronic_circuit'),
        tr('solid_fuel_generator'), 
        tr('manual'),
        tr('grinder'),
        tr('compressor'),
        tr('copper_cable'),
        tr('tin_cable'),
        tr('gold_cable'),
        tr('hv_cable'),
        tr('glassfiber_cable'),
        tr('insulated_copper_cable'),
        tr('insulated_gold_cable'),
        tr('insulated_hv_cable'),
        tr('superconductor_cable'),
        tr('steel_small_dust'),
        tr('wire_mill'),
        tr('rock_cutter'),
        tr('clay_dust'),
        tr('clay_small_dust'),
        vh('wooden_hammer'),
        vh('stone_hammer'),
        vh('ender_hammer'),
        vh('fiery_hammer'),
        vh('lapis_hammer'),
        vh('obsidian_hammer'),
        vh('prismarine_hammer'),
        vh('quartz_hammer'),
        vh('slime_hammer')
    ];
    REI_DELETED_ITEMS.forEach(id => e.hide(id));
});

REIEvents.removeCategories(e => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let tr = (id) => `techreborn:${id}`;
    let tf = (id) => `twilightforest:${id}`;
    let mc = (id) => `minecraft:${id}`;
    let ad = (id) => `ad_astra:${id}`;
    let cr = (id) => `create:${id}`;

    const REMOVED_CAT = [
        mc('plugins/tag'),
        ad('compressor'),
        tf('uncrafting'),
        tr('alloy_smelter'),
        tr('assembling_machine'),
        tr('chemical_reactor'),
        tr('distillation_tower'),
        tr('implosion_compressor'),
        tr('blast_furnace'),
        tr('centrifuge'),
        tr('industrial_electrolyzer'),
        tr('grinder'),
        tr('compressor'),
        tr('chemical_reactor'),
        tr('fusion_reactor'),
        tr('fluid_replicator'),
        tr('distillation_tower'),
        tr('industrial_grinder'),
        tr('industrial_sawmill'),
        tr('vacuum_freezer'),
        tr('solid_canning_machine'),
        tr('wire_mill'),
        tr('gas_turbine'),
        tr('plasma_generator'),
        tr('diesel_generator'),
        tr('semi_fluid_generator'),
        cr('charging')
    ];
    REMOVED_CAT.forEach(id => e.remove(id));
});