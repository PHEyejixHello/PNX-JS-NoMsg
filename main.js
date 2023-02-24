import { PowerNukkitX, EventPriority } from ":powernukkitx";
console.log("'[NoMsg]已加载'")
export function main() {
    PowerNukkitX.listenEvent("cn.nukkit.event.player.PlayerCommandPreprocessEvent", EventPriority.NORMAL, event => {
        if (event.isCancelled()) {
        	return;
        }
        if (event.getMessage()
        	.includes("/msg ")) {
        	if (event.getMessage()
        		.includes("@a")) {
        		event.setCancelled();
        		event.getPlayer()
        			.sendMessage("§6[NoMsg] /msg消息中禁止使用@a选择器");
        	}
        	if (event.getMessage()
        		.includes("@e")) {
        		event.setCancelled();
        		event.getPlayer()
        			.sendMessage("§6[NoMsg] /msg消息中禁止使用@e选择器");
        	}
        }
        if (event.getMessage()
        	.includes("/me ")) {
        	if (event.getMessage()
        		.includes("@e")) {
        		event.setCancelled();
        		event.getPlayer()
        			.sendMessage("§6[NoMsg] /me消息中禁止使用@e选择器");
        	}
        	if (event.getMessage()
        		.includes("@a")) {
        		event.setCancelled();
        		event.getPlayer()
        			.sendMessage("§6[NoMsg] /me消息中禁止@a选择器");
        	}
        }
        if (event.getMessage()
        	.includes("/tell ")) {
        	if (event.getMessage()
        		.includes("@e")) {
        		event.setCancelled();
        		event.getPlayer()
        			.sendMessage("§6[NoMsg] /tell消息中禁止使用@e选择器");
        	}
        	if (event.getMessage()
        		.includes("@a")) {
        		event.setCancelled();
        		event.getPlayer()
        			.sendMessage("§6[NoMsg] /tell消息中禁止使用@a选择器");
        	}
        }
        if (event.getMessage()
        	.includes("/w ")) {
        	if (event.getMessage()
        		.includes("@e")) {
        		event.setCancelled();
        		event.getPlayer()
        			.sendMessage("§6[NoMsg] /w消息中禁止使用@e选择器");
        	}
        	if (event.getMessage()
        		.includes("@a")) {
        		event.setCancelled();
        		event.getPlayer()
        			.sendMessage("§6[NoMsg] /w消息中禁止使用@a选择器");
        	}
        }
    })
}
//NoMsg by PHEyeji
