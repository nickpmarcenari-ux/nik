const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{CentrarEm: 0},
	{Jogador: 0},
	{Sólido: 0},
	{PlanoDeFundoEmBlocos: 0},
	{Tomate: 0},
	{Teclado: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{PlanoDeFundoEmBlocos5: 0},
	{PlanoDeFundoEmBlocos6: 0},
	{PlanoDeFundoEmBlocos7: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{sprite4: 0}
];

self.InstanceType = {
	Jogador: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	Tomate: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos5: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos6: class extends self.ITiledBackgroundInstance {},
	PlanoDeFundoEmBlocos7: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	sprite4: class extends self.ISpriteInstance {}
}